# 🛡️ Super Encoder

A Node.js command-line app that lets you encode and decode messages using multiple cipher methods like Caesar Cipher, Symbol Cipher, and Word Reversal Cipher.

## 📦 Features

- Caesar Cipher with customizable shift
- Symbol-based letter substitution
- Reverse word order and spelling
- Combine methods to encode/decode deeply
- Clean command-line interface

## 🚀 How to Use

### Encrypt with one cipher
```bash
node cipher.js caesar 12
node cipher.js reverse
node cipher.js symbol
```

You’ll be prompted to enter your message, and the encrypted version will be displayed.

### Encode using all ciphers
```bash
node super-encoder.js encode
```

### Decode back
```bash
node super-encoder.js decode
```

## 🧠 Ciphers Explained

- **Caesar Cipher:** Shifts each letter forward by a number.
- **Symbol Cipher:** Replaces characters like `i → !`, `a → @`, etc.
- **Reverse Cipher:** Flips each word in the sentence.

## 📁 File Structure

```
project/
│
├── encryptors.js         # All cipher functions
├── cipher.js             # Choose and apply a single cipher
├── super-encoder.js      # Encodes/decodes with all ciphers
└── README.md
```

## 🔧 Requirements

- Node.js (v14 or higher)

## 📬 Example

```bash
$ node super-encoder.js encode
> JavaScript is awesome!
Here is your encrypted message:
> [encrypted output]
```

## 🛠️ Expand Ideas

- Add a GUI with Electron
- Add custom symbol maps
- Store encoded messages in a file
