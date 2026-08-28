# Article preview component

My solution to the [Article preview component](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://article-preview-component.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/article-preview-component

## Built with

- Next.js 16, App Router
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

I took the colours from the design file rather than `style-guide.md`. The HSL values in
the style guide round a point off on two of the four.

Three text pairings failed AA, so each moved the smallest amount that clears it:

|             | design    | built     | contrast     |
| ----------- | --------- | --------- | ------------ |
| Body copy   | `#6E8098` | `#667890` | 4.04 to 4.51 |
| Date        | `#9DAEC2` | `#5E7998` | 2.27 to 4.50 |
| SHARE label | `#9DAEC2` | `#BECAD7` | 3.33 to 4.53 |

The date and the SHARE label are the same colour in the design but sit on opposite
backgrounds, white and dark. One has to go darker and the other lighter, so a single
design token necessarily became two.

The share button's disc and the card are both about 1.1:1 against what's behind them,
which I left alone. Neither is a boundary that 1.4.11 covers: the button is identified by
the glyph inside it, and the card is a surface with a shadow doing its edge work.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
