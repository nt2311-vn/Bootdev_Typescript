declare global {
  interface Window {
    supportAI: SupportAI;
  }
}

interface SupportAI {
  version: "0.1-alpha";
  enableAutoReply: () => void;
}

export {};
