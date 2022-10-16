# CHUSTORY 📚

🎮 A service that provides characters' story from <a href="https://chunithm.sega.jp/" target="_blank" rel="noopener noreferrer">CHUNITHM</a> in English and Korean. 📖

⚠️ChuStory is an unofficial CHUNITHM-fan-made site.<br>
⚠️Copyright of all illustrations and contents, related to CHUNITHM, are owned and reserved by ©SEGA

## Demonstration ⚙️

- PC 🖥️

![pc](https://user-images.githubusercontent.com/35278730/195573366-c0e44421-681c-4f49-aa6e-73ae85613e10.gif)

- SP 📱

![sp](https://user-images.githubusercontent.com/35278730/195573418-18e11da5-4f99-49de-ba40-670a410df736.gif)

## Reason for making this? 💡

> TLDR: To share the characters' story of CHUNITHM to people who could not read Japanese.

Since late 2022, CHUNITHM became playable in countries other than Japan.

The number of international CHUNITHM players have increased since then and some players had some interest in the unique story that each character had.

However, due to the language barrier, Japanese, few were able to understand or enjoy the character's story, which gives another enjoyment of playing CHUNITHM.

To solve this problem I decided to build a service that can convey the characters' story to non-Japanese people, mainly focusing on English and Korean.

## Tech Stack 🧰

Type  | Name
------------- | -------------
Frontend 🖥️ | Next.js, SCSS
Backend(API) ⚙️ | <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a>
Middleware 🛠️ | <a href="https://www.prisma.io/" target="_blank" rel="noopener noreferrer">Prisma</a>
Database 💾 | <a href="https://planetscale.com/" target="_blank" rel="noopener noreferrer">PlanetScale</a>
Deploy & CD/CI 📦 | <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a>

## Reason of using the stack above? ✨

> TLDR: To release the service in a month.

I recommend to the people, who were expecting to see the pro and cons of each stack, to skip this section.

I have given exactly one month to complete the following tasks while working 9 to 6.

- Designing the service
- Designing the service flow
- Designing wire frame
- Making initial design
- Develop
- Deploy
- Getting feedback from users.

To complete the tasks above, I decided to choose tools that could help to rapidly build the service. Focus on tech that are widely used in the market..

## Trobleshooting 🚑

> .env files and deployment 🔧

API keys for in a `.env` file and the file was added in `.gitignore`. This means that the git repository will not have the `.env` file.

Vercel deploys Next.js projects by importing github repository, but the repository did not have `.env` file. This made me ponder the way to connect API keys to the project that was about to be deployed via Vercel.

A little research, I have found a solution to my problem. Just before deploying this project via Vercel, there is a section where the owner of the project to write API keys directly, which will be saves as key-value.

Thanks to Vercel's document, I could safely connect my database API key, which has `read only` right, to my project.

> Google Analytics 🔧

(2022/10/13)

Tried to sign up for GA, but the GA sign up page kept showing me 'Interal error'. 

Trial & Errors 💭

- Tried signing up with different Google accounts.
- Set the country/region and currency correctly.
- Watched some basic GA related clips on Youtube.
- Filled out the sign up form and opened developer tool to see the response of submitting the sign up form.

I found out that when I submit the correctly filled form in the sign up page, the HTTP response was `500`, which means there is something going on at the server, or backend logic. Assumed that the cause of the problem was not on the client side.

I decided to retry signing up after a day or so.

(2022/10/14)
I tried to sign up GA again after a day, and it worked. My guess about the problems on the server side was correct.

> Images not loading when accessed with South Korea IPs 🔧

(2022/10/15)
My page showed images well when accessed with IPs other than South Korea, but with South Korea IPs the images could not be read.

Trial & Errors 💭

1. Double check the URL of image after Next.js's image optimization.

Next.js serves image optimization feature by using `<Image/>` tag. The project was released via `Tokyo` AP, the closest area available on Vercel at the time.

After the image optimization is completed, there will be a new URL to be referred as used in the Next.js page. I have checked the exact same URL with South Korea IP, Japan IP, Malaysia IP, and Thailand IP. The result was only South Korea IP was not able to load the optimized images. 

2. Serve images as static files.

As a workaround, I decided to serve all dynamic loading images as static files, in public folder. This made the servive show all the necessary images, regardless of region IPs.

## What's next? ⌚

The following feature will be added in the near future.

1. Rsgister all CHUNITHM characters that have stories.
2. Filter and sort character according to themes.
3. Leverage `<datalist>` tag for searching a specific character.
4. Add a clip that is related to a character in the modal.
5. Add story content in English.
6. Add story content in Japanese.