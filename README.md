# Case Study: Parallax with gsap

> This is a practice for react from this [topic](https://gsap.com/community/forums/topic/24712-how-to-create-parallax-effect-with-gsap/)

## Dependencies

- React + Vite
- GSAP
- tailwindcss

## Get Start

```shell
npm install
npm run dev
```

## Process

1. To apply `gsap` in react, we need to install `gsap` and `@types/gsap` first.

As it mentioned in here[https://gsap.com/resources/React], `useGsap` follow the rules of [`React's best practices`](https://react.dev/learn/synchronizing-with-effects#triggering-animations) for animation cleanup.

You can use `useGsap` as:

```jsx
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger); // register any plugins you need

const container = useRef(null);

useGSAP(
  () => {
    // Your GSAP code here
  },
  {} // scope options here
);
```

2. Methods in `gsap`:

> Give it a try on [Your first animation](https://gsap.com/resources/get-started)

- `gsap.to()`: animate to a specific value
- `gsap.from()`: animate from a specific value
- `gsap.fromTo()`: animate from a specific value to another specific value

#Plugin:

- `scrollTrigger`: trigger the animation when the scroll is at a specific position
- `textPlugin`: animate the text

3. Analyze the need of parallax effect:

> The parallax effect is a scrolling effect that creates the illusion of depth by moving the background image at a slower speed than the foreground image.

Implement the parallax effect with `fromTo()`:

- `from`: `50% ${-window.innerHeight * getRatio(sec)}px`

it means the background image will move up when the scroll is at the middle of the screen and the speed is `getRatio(sec)` times of the scroll speed.

- `to`: `50% ${window.innerHeight * (1 - getRatio(sec))}px`

it means the background image will move down when the scroll is at the middle of the screen and the speed is `getRatio(sec)` times of the scroll speed.

## Reference

1. [How to create parallax effect with gsap?](https://gsap.com/community/forums/topic/24712-how-to-create-parallax-effect-with-gsap/)

2. [Demos & Starters](https://gsap.com/demos?page=1)

3. [GSAP Document](https://gsap.com/docs/v3/)

4. [簡單打造動畫效果！使用 NPM 入門 GSAP (GreenSock Animation Platform)](https://medium.com/@ym911216/簡單打造動畫效果-使用npm入門gsap-greensock-animation-platform-3a9f553301b9)
