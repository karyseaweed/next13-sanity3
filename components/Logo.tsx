import Image from 'next/image';

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className='flex items-center space-x-2'>
      <Image
        className='rounded-full object-cover'
        height={50}
        width={50}
        src='https://media1.popsugar-assets.com/files/thumbor/N_16tD1hHOSI1L0t5Xgo3BKWvuQ/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2013/07/29/916/n/1922243/215118c963d5f483_shades/i/Pictures-Dogs-Wearing-Sunglasses.jpg'
        alt='logo'
      />
    </div>
  );
}

export default Logo;
