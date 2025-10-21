# 🧩 Git Commit Message Convention

To keep our commit history clean and meaningful, we use the following format:

```
[TYPE] Short description
```

Optionally, you can also add emojis for clarity or fun:
```
[TYPE] 🔥 Short description
✅ [done] Login feature completed
```

---

## 🏷️ **Allowed Commit Types**

| Type | Meaning | Example |
|------|----------|----------|
| [feature] | New feature or module | `[feature] ✨ Add user login page` |
| [fix] | Bug fix or patch | `[fix] 🐛 Resolve login crash issue` |
| [done] | Completed task or feature | `[done] ✅ Login system complete` |
| [update] | Minor improvements or changes | `[update] 🔧 Improve navbar layout` |
| [refactor] | Code restructuring or optimization | `[refactor] ♻️ Simplify API logic` |
| [style] | UI or styling changes | `[style] 💄 Update button color` |
| [docs] | Documentation changes | `[docs] 📝 Update README.md` |
| [test] | Adding or updating tests | `[test] 🧪 Add login unit tests` |
| [deploy] | Deployment or release | `[deploy] 🚀 Deploy version 1.2.0` |
| [config] | Build or config changes | `[config] ⚙️ Update ESLint rules` |

---

## 💡 **Examples**

```bash
git commit -m "[feature] ✨ Add product listing page"
git commit -m "[fix] 🐛 Fix login validation"
git commit -m "[done] ✅ Registration flow complete"
git commit -m "[docs] 📝 Add API usage instructions"
git commit -m "[deploy] 🚀 Version 1.0.0 deployed"
```

---

## 📘 **Tips**
- Use **present tense**: “Add”, not “Added”  
- Keep messages **short and clear** (under 72 chars)  
- Group related commits by type  
- Avoid generic messages like “update code” or “fix bug”
