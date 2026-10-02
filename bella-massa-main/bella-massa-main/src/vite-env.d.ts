/// <reference types="vite/client" />

// Variaveis de ambiente usadas pelo site (todas precisam do prefixo VITE_)
interface ImportMetaEnv {
  readonly VITE_WHATSAPP: string
  readonly VITE_PROMOCAO?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
