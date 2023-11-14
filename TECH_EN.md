## Tech Stack 🧰

Type  | Name
------------- | -------------
Frontend 🖥️ | Next.js, SCSS
Backend(API) ⚙️ | <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a>
Middleware 🛠️ | <a href="https://www.prisma.io/" target="_blank" rel="noopener noreferrer">Prisma</a>
Database 💾 | <a href="https://planetscale.com/" target="_blank" rel="noopener noreferrer">PlanetScale</a>
Deploy & CD/CI 📦 | <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a>
E2E Test 🧪 | <a href="https://www.cypress.io/" target="_blank" rel="noopener noreferrer">Cypress</a>

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

> Error during deployment: '**.ts' cannot be compiled under '--isolatedModules'

The solution: https://stackoverflow.com/questions/56577201/why-is-isolatedmodules-error-fixed-by-any-import

## What's next? ⌚

The following feature will be added in the near future.

- Rsgister all CHUNITHM characters that have stories. (WIP)
- Add independant comment feature for each characters. (Pending)
- Filter and sort character according to themes. (Pending)
- Leverage `<datalist>` tag for searching a specific character. (Pending)
- Add a clip that is related to a character in the modal. (Pending)
- Add story content in English. (Pending)
- Add story content in Japanese. (Pending)