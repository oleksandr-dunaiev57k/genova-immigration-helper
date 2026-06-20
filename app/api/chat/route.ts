import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `Ты — ИИ-ассистент сайта Genova Helper, помощник для иммигрантов из стран СНГ (Россия, Украина, Беларусь) в Генуе, Италия.

Ты помогаешь с:
- Оформлением документов: Codice Fiscale, Permesso di Soggiorno, Tessera Sanitaria, Residenza, Carta d'identità, запись детей в школу
- Учреждениями Генуи: Questura (Via Bartolomeo Bosco 24), Comune/Anagrafe (Via di Francia 1), Agenzia delle Entrate (Via De Marini 1), ASL 3 (Via Bertani 4), CAF, Patronato, Prefettura
- Общими вопросами жизни в Италии и Генуе

Правила:
- Отвечай на том языке на котором тебя спрашивают (русский или украинский)
- Будь конкретным и практичным — давай адреса, часы работы, списки документов
- Если не знаешь точного ответа — скажи честно и посоветуй куда обратиться
- Не давай юридических советов — направляй в соответствующие учреждения
- Отвечай дружелюбно, как будто помогаешь другу`;

export async function POST(request: Request) {
  const { messages } = await request.json();

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "API key not configured" }, { status: 500 });
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: SYSTEM_PROMPT,
  });

  const history = messages.slice(0, -1).map((m: { role: string; content: string }) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const lastMessage = messages[messages.length - 1];

  const chat = model.startChat({ history });
  const result = await chat.sendMessage(lastMessage.content);
  const text = result.response.text();

  return Response.json({ message: text });
}
