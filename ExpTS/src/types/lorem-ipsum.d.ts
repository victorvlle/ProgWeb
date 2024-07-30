declare module 'lorem-ipsum' {
    export interface LoremIpsumOptions {
      sentencesPerParagraph?: {
        max: number;
        min: number;
      };
      wordsPerSentence?: {
        max: number;
        min: number;
      };
      format?: string;
      suffix?: string;
    }
  
    export class LoremIpsum {
      constructor(options?: Partial<LoremIpsumOptions>);
      generateWords(num: number): string;
      generateSentences(num: number): string;
      generateParagraphs(num: number): string;
    }
  }
  