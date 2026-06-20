import Groq from "groq-sdk";

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

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "API key not configured" }, { status: 500 });
  }

  const groq = new Groq({ apiKey });

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages.map((m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.content,
      })),
    ],
    max_tokens: 1024,
  });

  const text = completion.choices[0]?.message?.content ?? "Произошла ошибка.";
  return Response.json({ message: text });
}
