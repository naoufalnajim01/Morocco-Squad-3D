<div align="center">

# 🇲🇦 Morocco Squad 3D - الأسود الأطلس

<img src="demo.png" alt="Morocco Squad 3D Preview" width="800"/>

### 🏆 CAN AFCON 2025 Special Edition 🏆

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit-green?style=for-the-badge)](https://naoufalnajim01.github.io/Morocco-Squad-3D)
[![GitHub](https://img.shields.io/badge/GitHub-naoufalnajim01-181717?style=for-the-badge&logo=github)](https://github.com/naoufalnajim01)
[![License](https://img.shields.io/badge/License-MIT-red?style=for-the-badge)](LICENSE)

**An interactive 3D gallery celebrating the Atlas Lions 🦁**

**English** | **[العربية](README.ar.md)** | **[Français](README.md)**

---

</div>

## 🎯 About

**Morocco Squad 3D** is an interactive web experience created to celebrate the Moroccan national football team for **CAN AFCON 2025**. This project showcases the Atlas Lions players in an immersive 3D carousel with modern visual effects.

### ✨ Features

- 🎨 **Interactive 3D Carousel** - Smooth navigation with auto-rotation
- 🌓 **Dark/Light Mode** - Adaptive theme with automatic detection
- 📱 **100% Responsive** - Mobile, tablet, and desktop compatible
- 🎭 **Glassmorphism Effects** - Modern design with glass effects
- 🖼️ **Dynamic Background** - Background changes with active player
- ⚡ **Optimized Performance** - Smooth animations at 60 FPS
- 🎮 **Intuitive Controls** - Drag & drop, hover, and touch support



```
HTML5        ████████████████████  100%
CSS3         ████████████████████  100%
JavaScript   ████████████████████  100%
```

- **HTML5** - Semantic structure
- **CSS3** - 3D Animations, Glassmorphism, CSS Variables
- **Vanilla JavaScript** - Interactive logic without frameworks
- **Google Fonts** - Tajawal typography (Arabic)

## 📸 Preview

<div align="center">

![Morocco Squad 3D](demo.png)

</div>

## 🎮 How to Use

### Local Installation

```bash
# Clone the repository
git clone https://github.com/naoufalnajim01/Morocco-Squad-3D.git

# Navigate to folder
cd Morocco-Squad-3D

# Open index.html in your browser
# Or use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

### Controls

- **🖱️ Mouse** - Click and drag to rotate the carousel
- **👆 Hover** - Hover over a card to center it automatically
- **📱 Touch** - Swipe to navigate on mobile
- **🌓 Toggle** - Click the button in the top right to change theme

## 🏗️ Project Structure

```
Morocco-Squad-3D/
├── index.html          # Main page
├── style.css           # Styles and animations
├── script.js           # JavaScript logic
├── demo.mp4            # Demo video
├── demo.png            # Preview image
├── README.md           # Documentation (Français)
├── README.en.md        # Documentation (English)
├── README.ar.md        # Documentation (العربية)
└── src/
    └── images/         # Player photos (20 images)
```



This project was created specially to celebrate Morocco's participation in the **Africa Cup of Nations 2025**. 

### 🇲🇦 Dima Maghrib! ❤️

> *"Sbooooo3a! 🦁🔥🏆"*

## 🎨 Customization

### Change Colors

Modify CSS variables in `style.css`:

```css
:root {
    --bg-primary: linear-gradient(135deg, #0a1a0f 0%, #1a0a0a 50%, #0a0a1a 100%);
    --card-border: rgba(248, 231, 28, 0.4);
    --glow-green: rgba(22, 91, 51, 0.5);
    --glow-red: rgba(187, 37, 40, 0.5);
}
```

### Add Players

1. Add the image to `src/images/`
2. Add the card in `index.html`:
```html
<div class="card" data-index="20"><img src="src/images/new.jpg" alt="New Player"></div>
```
3. Add the path in `script.js`:
```javascript
const images = [
    // ... other images
    'src/images/new.jpg'
];
```

## 🤝 Contribution

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Naoufal Najim**

- 📧 Email: [naoufal.najim19@gmail.com](mailto:naoufal.najim19@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/naoufalnajim01](https://linkedin.com/in/naoufalnajim01)
- 🐦 X/Twitter: [@naoufalnajim01](https://twitter.com/naoufalnajim01)
- 💻 GitHub: [@naoufalnajim01](https://github.com/naoufalnajim01)

## 🙏 Acknowledgments

- 🦁 **The Atlas Lions** - For the inspiration
- 🇲🇦 **Morocco National Team** - For unforgettable moments
- 🏆 **CAN AFCON 2025** - For the motivation
- ⚽ **All Moroccan supporters** - Dima Maghrib!

---

<div align="center">

### 🌟 If you like this project, don't forget to give it a ⭐!

**Made with ❤️ for Morocco 🇲🇦**

![Morocco Flag](https://img.shields.io/badge/🇲🇦-Morocco-c1272d?style=for-the-badge)
![AFCON 2025](https://img.shields.io/badge/🏆-AFCON_2025-165B33?style=for-the-badge)

</div>

---

## 📱 Contact

For any questions or suggestions, feel free to open an issue!

**Dima Maghrib! 🦁❤️🇲🇦**
