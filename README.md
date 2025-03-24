<div align="center">
    <img src="./public/cloud.gif" style="width: 250px; display: block; margin-left: auto; margin-right: auto;"/>
</div>

# TGS Player Web Component
A lightweight web component for playing Telegram Sticker animations (*.tgs files) in web browsers using WebAssembly technology.

### Features
- Extremely small footprint (~30KB for the core WebAssembly module)
- Hardware-accelerated rendering using WebAssembly
- Support for Telegram's TGS (Lottie) animation format
- Simple API with declarative usage
- Customizable playback controls

### Installation
1. Add the `/js` folder to the root of your project or to an existing directory
2. Include the component in your HTML:
```html
<script src="/js/tgs-player.js"></script>
```

### Usage
Basic implementation:
```html
<tgs-player 
    src="/path/to/sticker.tgs"
    once
    onclick
    autoplay>
</tgs-player>
```

### Attributes
| Attribute | Description |
|---------|----------|
| `src` | Path to .tgs file (required) |
| `once` | Play animation only once |
| `onclick` | Enable click-to-play functionality |
| `autoplay` | Start animation automatically |

### Examples

### Basic Usage:
```html
<tgs-player src="/stickers/animation.tgs"></tgs-player>
```

### Click-to-Play Animation:
```html
<tgs-player 
    src="/stickers/animation.tgs" 
    onclick>
</tgs-player>
```

### One-time Autoplay:
```html
<tgs-player 
    src="/stickers/animation.tgs" 
    once 
    autoplay>
</tgs-player>
```

### Technical Details
- Uses WebAssembly for high-performance animation rendering
- Optimized for modern browsers
- No external dependencies required
- Efficient memory management through WebAssembly

### Browser Support
Supports all modern browsers with WebAssembly capabilities:

- Chrome (v57+)
- Firefox (v52+)
- Safari (v11+)
- Edge (v79+)

### Performance
- Minimal CPU usage due to WebAssembly optimization
- Small memory footprint
- Hardware acceleration when available
- Efficient animation caching system

### Source code
Some of the code is taken from the demo mini application [durgerKing](https://t.me/DurgerKingBot) which was created by the team telegarm to demonstrate the capabilities of TMA