'use server';
/**
 * @fileOverview An AI agent that analyzes financial data and generates personalized financial strategies.
 *
 * - generateFinancialStrategy - A function that handles the financial strategy generation process.
 * - GenerateFinancialStrategyInput - The input type for the generateFinancialStrategy function.
 * - GenerateFinancialStrategyOutput - The return type for the generateFinancialStrategy function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateFinancialStrategyInputSchema = z.object({
  annualIncome: z.number().describe('The user\'s current annual income.'),
  currentSavings: z.number().describe('The user\'s total current savings and investments.'),
  monthlyExpenses: z.number().describe('The user\'s estimated monthly expenses.'),
  age: z.number().int().positive().describe('The user\'s age.'),
  financialGoals: z.string().describe('A summary of the user\'s financial goals (e.g., retirement, buying a house, child\'s education).'),
  riskTolerance: z.string().describe('The user\'s risk tolerance (e.g., "low", "medium", "high").'),
  loanDetails: z.array(z.string()).describe('An array of strings, each summarizing details of an active loan (e.g., "Home loan: $300k, 7% interest, $2k/month EMI.").'),
  investmentDetails: z.array(z.string()).describe('An array of strings, each summarizing details of current investments (e.g., "SIP: $500/month, 12% expected return, target $150k.").'),
  taxSituation: z.string().describe('A summary of the user\'s current tax situation (e.g., "Annual taxable income $80k, current deductions $5k.").'),
});
export type GenerateFinancialStrategyInput = z.infer<typeof GenerateFinancialStrategyInputSchema>;

const GenerateFinancialStrategyOutputSchema = z.object({
  summary: z.string().describe('An overall summary of the personalized financial strategy.'),
  savingsRecommendations: z.array(z.string()).describe('A list of actionable recommendations for optimizing savings.'),
  investmentRecommendations: z.array(z.string()).describe('A list of actionable recommendations for optimizing investments.'),
  taxOptimizationRecommendations: z.array(z.string()).describe('A list of actionable recommendations for tax savings.'),
  nextSteps: z.array(z.string()).describe('A list of suggested next steps for the user to implement the strategy.'),
});
export type GenerateFinancialStrategyOutput = z.infer<typeof GenerateFinancialStrategyOutputSchema>;

export async function generateFinancialStrategy(input: GenerateFinancialStrategyInput): Promise<GenerateFinancialStrategyOutput> {
  return generateFinancialStrategyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'financialStrategyPrompt',
  input: { schema: GenerateFinancialStrategyInputSchema },
  output: { schema: GenerateFinancialStrategyOutputSchema },
  prompt: `You are a highly experienced and ethical financial advisor named FinanceCalc Pro. Your goal is to analyze the user's financial data and provide personalized, actionable recommendations for optimizing their savings, investments, and tax-saving strategies. Focus on clear, concise, and realistic advice. The user is looking for practical steps they can take.

**User Financial Data:**
Annual Income: {{{annualIncome}}}
Current Savings/Investments: {{{currentSavings}}}
Monthly Expenses: {{{monthlyExpenses}}}
Age: {{{age}}}
Financial Goals: {{{financialGoals}}}
Risk Tolerance: {{{riskTolerance}}}

**Active Loans:**
{{#if loanDetails}}
{{#each loanDetails}}- {{{this}}}
{{/each}}
{{else}}
No active loans reported.
{{/if}}

**Current Investments:**
{{#if investmentDetails}}
{{#each investmentDetails}}- {{{this}}}
{{/each}}
{{else}}
No current investments reported.
{{/if}}

**Tax Situation:**
{{{taxSituation}}}

Based on this information, provide comprehensive and actionable financial advice in the specified JSON format. Ensure all recommendations are practical and tailored to the provided financial data and goals.`,
});

const generateFinancialStrategyFlow = ai.defineFlow(
  {
    name: 'generateFinancialStrategyFlow',
    inputSchema: GenerateFinancialStrategyInputSchema,
    outputSchema: GenerateFinancialStrategyOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
