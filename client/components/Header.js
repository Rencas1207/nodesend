import Image from "next/image"

export const Header = () => {
   return (
      <header className="py-8 flex flex-col md:flex-row items-center justify-between">
         <Image
            width={64}
            height={50}
            className="w-64 mb-8 md:mb-0"
            src="logo.svg"
            alt="logo react node send"
            priority
         />
      </header>
   )
}

