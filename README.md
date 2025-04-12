# 💧 Hydration Reminder — Your healthy break extension for VSCode

> Take care of your body while your mind creates.  
> **Hydration Reminder** is a simple and effective extension that reminds you to hydrate, stretch, and take strategic breaks during long coding sessions.

---

## ✨ Key Features

- ⏱️ **Monitors your typing activity** in real time
- 💧 **Displays an alert after 1 hour** of continuous coding
- 💤 **Automatically resets** after 10 minutes of inactivity
- 🔔 **Interactive notifications** with motivational messages
- 🖥️ **Visible status in the VSCode bottom bar**
- 🟢 **Toggle on/off mode with one click**

---

## 📸 Alert Example

```
💧 *Break time!*
You’ve been coding non-stop for 1 hour.
```

Interactive options:
- ✅ Done
- ⏳ Remind me later

---

## 🧪 How it works

- Automatically activates when VSCode is opened
- Tracks your typing time
- Resets the timer after detecting inactivity
- Allows toggling between **active/inactive** directly from the status bar

---

## 🚀 Installation

### Via Marketplace (coming soon)
> Search for `Hydration Reminder` in the VSCode Extensions tab.

### Manual Installation (.vsix)

1. Download the `.vsix` file
2. Run the command:

```bash
code --install-extension hydration-reminder-1.0.0.vsix
```

---

## ⚙️ Available Settings

You can customize the reminder timing:

```json
{
  "hydradev.alertTimeInMinutes": 60,
  "hydradev.idleResetTime": 10
}
```

---

## 🙋‍♂️ Author

Developed with focus on health, productivity, and good humor by  
[Matheus Chiodi](https://github.com/matheuschiodi) • [@MChiodiDev](https://www.youtube.com/@MChiodiDev)

---

## ☕ Contribute

If this extension helped you, consider giving it a GitHub star ⭐  
Suggestions, improvements, or bugs? Feel free to open an issue!