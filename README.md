This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash


npm install

npm run dev
# or
yarn dev
```


Notes

use Image tag that Next js provides 

import Image from next/image


For adding pictures, Create a folder and name it your team name and put in inside the public folder.


to access it do it like so.
for example if your group name is group1 and the picture is image1.png this is how you do it

            <Image
              src='/sd.github.io/group1/image1.png'
              alt='Vercel Logo'
              width={72}
              height={16}
            />

check the main index.js in the pages folder as a reference to check how to use the css

