'use server';
/**
 * @fileOverview An AI agent that provides intelligent financial insights and explanations.
 *
 * - provideFinancialInsights - A function that analyzes financial calculation results and user goals to provide personalized insights.
 * - ProvideFinancialInsightsInput - The input type for the provideFinancialInsights function.
 * - ProvideFinancialInsightsOutput - The return type for the provideFinancialInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProvideFinancialInsightsInputSchema = z.object({
  calculationResults: z
    .string()
    .describe(
      'A JSON string containing the summarized results of various financial calculations (e.g., EMI, SIP, FD, etc.) that the user has performed.'
    ),
  userFinancialGoals: z
    .string()
    .describe(
      "The user's stated financial goals and objectives, such as 'save for retirement', 'buy a house in 5 years', or 'reduce debt'."
    ),
});
export type ProvideFinancialInsightsInput = z.infer<
  typeof ProvideFinancialInsightsInputSchema
>;

const ProvideFinancialInsightsOutputSchema = z.object({
  insightsSummary: z
    .string()
    .describe('A concise summary of the main financial insights.'),
  keyTakeaways: z
    .array(z.string())
    .describe('An array of key points or important considerations.'),
  longTermImpactAnalysis: z
    .string()
    .describe('A detailed analysis of the potential long-term financial impact.'),
  recommendations: z
    .array(z.string())
    .describe('Actionable recommendations to help the user achieve their goals.'),
  explanationOfConcepts: z
    .string()
    .optional()
    .describe(
      'An optional explanation of any complex financial terms or concepts mentioned or implied.'
    ),
});
export type ProvideFinancialInsightsOutput = z.infer<
  typeof ProvideFinancialInsightsOutputSchema
>;

export async function provideFinancialInsights(
  input: ProvideFinancialInsightsInput
): Promise<ProvideFinancialInsightsOutput> {
  return provideFinancialInsightsFlow(input);
}

const provideFinancialInsightsPrompt = ai.definePrompt({
  name: 'provideFinancialInsightsPrompt',
  input: {schema: ProvideFinancialInsightsInputSchema},
  output: {schema: ProvideFinancialInsightsOutputSchema},
  prompt: `You are an expert financial advisor named FinanceCalc Pro AI. Your task is to provide intelligent, personalized, and actionable financial insights and explanations based on a user's financial calculation results and their stated goals.

Analyze the following calculation results and the user's financial goals:

Calculation Results (JSON format):
{{{calculationResults}}}

User's Financial Goals:
{{{userFinancialGoals}}}

Based on this information, provide:
1.  A concise summary of the main insights.
2.  Key takeaways in bullet points.
3.  A detailed analysis of the long-term financial impact.
4.  Actionable recommendations to help the user achieve their goals.
5.  If any complex financial terms or concepts are mentioned or implied, provide a brief, easy-to-understand explanation for them.

Ensure your tone is professional, encouraging, and clear. Avoid jargon where possible, or explain it.`,
});

const provideFinancialInsightsFlow = ai.defineFlow(
  {
    name: 'provideFinancialInsightsFlow',
    inputSchema: ProvideFinancialInsightsInputSchema,
    outputSchema: ProvideFinancialInsightsOutputSchema,
  },
  async input => {
    const {output} = await provideFinancialInsightsPrompt(input);
    return output!;
  }
);
