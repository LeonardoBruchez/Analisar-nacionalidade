# 🇧🇷 Analisar-nacionalidade - Projeto de Aprendizado JavaScript

## 📋 Sobre o Projeto

Este é um projeto educacional focado no aprendizado de conceitos fundamentais do **JavaScript**, especificamente:

- **Interpolação de strings** com template literals (`${}`)
- **Funções** (`function`)
- **Manipulação de estilos** via JavaScript
- **Estruturas condicionais** (`if/else`)

O objetivo é criar uma aplicação simples que identifica se uma pessoa é brasileira ou estrangeira baseado no país de origem informado.

## 🎯 Conceitos JavaScript Praticados

### 1. **Interpolação de Strings (`${}`)**
```javascript
res.textContent = `Seu país de origem é ${pais.value}`
```
- Uso de template literals para inserir variáveis dentro de strings
- Sintaxe mais limpa que concatenação tradicional

### 2. **Funções**
```javascript
function calcular() {
  // código da função
}
```
- Declaração de função nomeada
- Chamada da função via evento `onclick` no HTML

### 3. **Manipulação de Estilos via JavaScript**
```javascript
res.style.textAlign = 'center'
res.style.marginBlock = '3rem'
res.style.font = '400 1.5rem arial'
```
- Alteração dinâmica de propriedades CSS
- Aplicação de estilos condicionais baseados na lógica

### 4. **Estruturas Condicionais (if/else)**
```javascript
if (PaisUpperCase === 'brasil' || PaisUpperCase === 'brazil') {
  res2.textContent = `Você é Brasileiro!`
} else {
  res3.textContent = 'Você é Estrangeiro!'
}
```
- Lógica condicional para diferentes cenários
- Operadores lógicos (`||` - OR)
- Comparação de strings com normalização (toLowerCase)

## 🚀 Como Executar

1. Clone ou baixe o projeto
2. Abra o arquivo `index.html` em qualquer navegador web
3. Digite um país no campo de entrada
4. Clique em "Verificar" para ver o resultado

## 📁 Estrutura do Projeto

```
knowNationality/
├── index.html          # Estrutura HTML básica
├── script.js           # Lógica JavaScript principal
├── style.css           # Estilos CSS (não foco atual)
└── assets/             # Recursos visuais
    └── flag.svg        # Ícone da bandeira
```

## 🔍 Funcionalidades

- **Entrada de dados**: Campo de texto para inserir o país
- **Validação**: Verifica se o país é Brasil (brasil/brazil)
- **Saída condicional**: Exibe mensagem diferente para brasileiros e estrangeiros
- **Estilização dinâmica**: Aplica estilos via JavaScript baseado na condição

## 📚 Conceitos Aprendidos

### JavaScript Básico
- ✅ Declaração e chamada de funções
- ✅ Manipulação do DOM (`querySelector`)
- ✅ Eventos (`onclick`)
- ✅ Template literals e interpolação
- ✅ Estruturas condicionais
- ✅ Operadores lógicos
- ✅ Manipulação de strings (`toLowerCase()`)
- ✅ Manipulação de estilos CSS via JavaScript

### HTML/CSS (Secundário)
- ✅ Estrutura HTML semântica
- ✅ Seletores CSS básicos
- ✅ Responsividade com media queries

## 🎓 Próximos Passos Sugeridos

Para continuar aprendendo JavaScript, considere implementar:

1. **Validação de entrada**: Verificar se o campo não está vazio
2. **Mais países**: Expandir a lógica para outros países
3. **Arrays**: Usar arrays para armazenar países válidos
4. **Loops**: Implementar verificações com `for` ou `forEach`
5. **Event listeners**: Substituir `onclick` por `addEventListener`

## 💡 Dicas de Estudo

- Foque na lógica JavaScript, não nos estilos CSS
- Pratique modificando as condições `if/else`
- Experimente diferentes formas de interpolação
- Teste com diferentes países para validar a lógica

---

**Objetivo**: Aprender JavaScript através de um projeto prático e divertido! 🚀
