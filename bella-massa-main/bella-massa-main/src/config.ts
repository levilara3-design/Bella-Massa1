// Le as variaveis de ambiente em um so lugar
// ?? usa o valor padrao se a variavel nao existir
export const whatsapp =
  import.meta.env.VITE_WHATSAPP ?? '5521999990000'

export const promocao =
  import.meta.env.VITE_PROMOCAO ?? ''

// 5521999990000 -> (21) 99999-0000
export function formatarTelefone(numero: string): string {
  const d = numero.slice(-11)
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}
