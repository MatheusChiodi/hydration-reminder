# 💧 Hydration Reminder — Sua extensão de pausas saudáveis no VSCode

> Cuide do seu corpo enquanto sua mente cria.  
> **Hydration Reminder** é uma extensão simples e eficaz que lembra você de se hidratar, alongar e fazer pausas estratégicas durante longas sessões de codificação.

---

## ✨ Funcionalidades principais

- ⏱️ **Monitora sua atividade de digitação** em tempo real
- 💧 **Exibe um alerta após 1 hora** de codificação contínua
- 💤 **Reseta automaticamente** após 10 minutos de inatividade
- 🔔 **Notificações interativas** com mensagens motivadoras
- 🖥️ **Status visível na barra inferior** do VSCode
- 🟢 **Modo ativar/desativar com um clique**

---

## 📸 Exemplo de alerta

```
💧 *Hora da pausa!*
Você está codando há 1 hora sem parar.
```

Opções interativas:
- ✅ Já fiz
- ⏳ Me lembra depois

---

## 🧪 Como funciona

- Ativada automaticamente ao abrir o VSCode
- Registra o tempo enquanto você digita
- Reinicia o ciclo após detectar inatividade
- Permite alternar entre **ativo/inativo** diretamente pela barra de status

---

## 🚀 Instalação

### Via Marketplace (em breve)
> Busque por `Hydration Reminder` na aba de extensões do VSCode.

### Instalação manual (.vsix)

1. Baixe o arquivo `.vsix`
2. Execute o comando:

```bash
code --install-extension hydration-reminder-1.0.0.vsix
```

---

## ⚙️ Configurações disponíveis

Você pode personalizar o tempo dos lembretes:

```json
{
  "hydradev.alertTimeInMinutes": 60,
  "hydradev.idleResetTime": 10
}
```

---

## 🙋‍♂️ Autor

Desenvolvido com foco em saúde, produtividade e bom humor por  
[Matheus Chiodi](https://github.com/matheuschiodi) • [@MChiodiDev](https://www.youtube.com/@MChiodiDev)

---

## ☕ Contribua

Se essa extensão te ajudou, considere deixar uma estrela no GitHub ⭐  
Sugestões, melhorias ou bugs? Fique à vontade para abrir uma issue!
