import { Noto_Sans_Mono } from "next/font/google";
import { Noto_Serif } from "next/font/google";

const notoSansMono = Noto_Sans_Mono({ subsets: ["latin"] });
const notoSerif = Noto_Serif({ subsets: ["latin"] });

export { notoSansMono, notoSerif };
