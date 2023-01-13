import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image
            className='rounded-full'
            height={50}
            width={50}
            src='https://media1.popsugar-assets.com/files/thumbor/N_16tD1hHOSI1L0t5Xgo3BKWvuQ/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2013/07/29/916/n/1922243/215118c963d5f483_shades/i/Pictures-Dogs-Wearing-Sunglasses.jpg'
            alt='logo'
          />
        </Link>
        <h1>Kary&rsquo;s Sanity</h1>
      </div>
      <div>
        <a
          href='https://tailwindcss.com/'
          target='_blank'
          rel='noreferrer'
          className='underline'>
          Check out Tailwind
        </a>
      </div>
    </header>
  );
}

export default Header;
