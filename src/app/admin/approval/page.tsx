import bgImage from '@/app/assets/Imgaes/bgImage.jpeg'
import RequestCard from '@/app/components/RequestCard';
import { Fragment } from 'react';
import Link from 'next/link';

interface Request {
  _id: string;
  name: string;
  url: string;
  role: string;
}

const fetchApprovalRequests = async (): Promise<Request[]> => {
  const res = await fetch('http://localhost:5001/admin/api/requests', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch approval requests');
  return res.json();
};

export default async function Page() {
  const approvalRequests = await fetchApprovalRequests();

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen text-white bg-gray-900">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-2/3 p-6 md:p-16 space-y-8">
        <Link href='/' className='flex gap-5 cursor-pointer '>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_dd_13001_723)">
          <rect x="3.1" y="2.1" width="31.8" height="31.8" rx="7.9" fill="white"/>
          <rect x="3.1" y="2.1" width="31.8" height="31.8" rx="7.9" fill="url(#paint0_linear_13001_723)"/>
          <rect x="3.1" y="2.1" width="31.8" height="31.8" rx="7.9" stroke="#D0D5DD" stroke-width="0.2"/>
          <path d="M18.3546 13.1828C22.7105 11.4504 27.4742 12.8185 29.6373 14.9133C30.106 15.3671 30.5041 15.8275 30.845 16.2852C31.0394 15.2107 31.0552 14.1405 30.8681 13.1055C30.1847 9.32649 26.6195 7.18561 23.4233 8.29149C20.2415 9.3924 19.0005 11.5321 19.0005 11.5321C19.0005 11.5321 17.7595 9.3924 14.5777 8.29149C11.3812 7.18561 7.81603 9.32672 7.1328 13.1055C6.62842 15.8944 7.58356 18.9392 9.61033 21.6298C10.0372 21.7732 10.4847 21.8809 10.9586 21.9431C13.7978 22.3163 14.8184 21.557 16.0178 21.0486C16.8142 20.7113 17.4134 21.0942 17.3843 21.3626C17.3392 21.7786 15.7693 22.4895 16.106 22.6388C17.4351 23.2285 19.0718 23.2334 20.3053 22.18C21.838 20.8712 22.4114 21.7659 22.4114 21.7659C22.4114 21.7659 21.6502 23.7076 19.3581 24.6717C17.4457 25.4761 15.4419 25.6743 13.6107 25.4683C15.19 26.5846 17.0035 27.5204 19.0005 28.1883C24.7099 26.2784 28.9276 22.1871 30.4145 17.9096C29.4072 16.9157 28.1716 16.2996 26.6988 16.0763C23.8674 15.6471 22.8322 16.3863 21.6228 16.8708C20.8198 17.1926 20.2285 16.7978 20.263 16.5299C20.3161 16.1148 21.8999 15.4351 21.5661 15.279C20.249 14.6633 18.6125 14.626 17.3585 15.6549C15.8003 16.9332 15.2446 16.0274 15.2446 16.0274C15.2446 16.0274 16.0438 14.1015 18.3546 13.1828ZM17.2709 18.5052H18.3709V17.4052H19.6296V18.5052H20.7296V19.7639H19.6296V20.8639H18.3709V19.7639H17.2709V18.5052Z" fill="url(#paint1_linear_13001_723)"/>
          <path d="M17.2709 18.5052H18.3709V17.4052H19.6296V18.5052H20.7295V19.7639H19.6378C21.2597 20.5834 24.2383 21.8027 27.8177 22.3451C28.9956 20.9517 29.8813 19.4428 30.4143 17.9096C29.4069 16.9157 28.1713 16.2996 26.6986 16.0763C23.8672 15.647 22.8319 16.3863 21.6226 16.8708C20.8196 17.1926 20.2282 16.7978 20.2627 16.5299C20.3159 16.1148 21.8997 15.4351 21.5659 15.279C20.2488 14.6633 18.6123 14.626 17.3583 15.6548C15.8 16.9332 15.2443 16.0274 15.2443 16.0274C15.2443 16.0274 16.0438 14.1013 18.3543 13.1823C22.7102 11.4499 27.4739 12.818 29.637 14.9128C30.1057 15.3666 30.5038 15.8271 30.8447 16.2847C31.0392 15.2102 31.055 14.14 30.8679 13.105C30.1844 9.326 26.6192 7.18512 23.423 8.291C20.2412 9.39191 19.0002 11.5316 19.0002 11.5316C19.0002 11.5316 17.7592 9.39191 14.5774 8.291C12.7519 7.65927 10.8067 8.0883 9.34619 9.27521C10.0323 10.7442 10.836 12.1168 13.1254 14.8773C14.9868 17.1222 17.2709 18.5052 17.2709 18.5052Z" fill="url(#paint2_linear_13001_723)"/>
          <path opacity="0.31" d="M27.277 9.64954C24.2712 8.13944 21.169 10.4892 20.1851 11.7299C21.882 11.3725 23.3668 11.1892 25.2457 11.5839C28.0252 12.1679 29.0654 13.1715 30.3064 14.6542C30.0871 11.9069 28.3519 10.1896 27.277 9.64954Z" fill="url(#paint3_linear_13001_723)"/>
          </g>
          <defs>
          <filter id="filter0_dd_13001_723" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13001_723"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="1.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_13001_723" result="effect2_dropShadow_13001_723"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_13001_723" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear_13001_723" x1="19" y1="2" x2="19" y2="34" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="#D0D5DD"/>
          </linearGradient>
          <linearGradient id="paint1_linear_13001_723" x1="10.1989" y1="24.2137" x2="27.8347" y2="6.57791" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0076C1"/>
          <stop offset="0.0737" stop-color="#0B82C6"/>
          <stop offset="0.2766" stop-color="#269ED3"/>
          <stop offset="0.4546" stop-color="#36AFDA"/>
          <stop offset="0.587" stop-color="#3CB5DD"/>
          </linearGradient>
          <linearGradient id="paint2_linear_13001_723" x1="10.1388" y1="24.2537" x2="27.8274" y2="6.56509" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00A482"/>
          <stop offset="1" stop-color="#79DD83"/>
          </linearGradient>
          <linearGradient id="paint3_linear_13001_723" x1="24.8608" y1="13.5073" x2="28.5288" y2="10.1132" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00A482"/>
          <stop offset="1" stop-color="#79DD83"/>
          </linearGradient>
          </defs>
          </svg>
          <h1 className="text-3xl font-semibold">CureTrack</h1>
        </Link>
        
        <p className="text-gray-400 italic">All pending Requests!</p>

        {/* Request Cards */}
        <div className="flex flex-col space-y-4 mt-4 overflow-y-auto max-h-[calc(100vh-200px)] pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {approvalRequests.length > 0 ? (approvalRequests.map((req) => (
            <Fragment key={req._id}>
              <RequestCard name={req.name} url={req.url} id={req._id} role={req.role} />
            </Fragment>
          ))):(<div className='flex w-full mt-14 text-2xl font-semibold justify-center italic'>No pending requests!!</div>)}
        </div>
      </div>

      {/* Right Section with Background Image */}
      <div
        className="hidden md:flex w-full md:w-1/3 bg-cover bg-center rounded-l-lg"
        style={{ backgroundImage: `url('https://s3-alpha-sig.figma.com/img/864f/5951/8ade4a2f720e6207181f3e46711872df?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UlU0C2xrrCvpFxYCjA72nFmIILRbQwqNB0Q8xYn0VenGjZXACXYZA7RqS091~NH3cspWbZ13p4tbfG1reDy7vAvhqFu8SQ6PPFlu4YVUe0cK636Ho-PgQSzNR~w8fpg5uF-vadsLEyxnut4NvtAaTDKdLIw-wE6WAHaNSUU7LhkYgKmPnR0J0w0dXYRk20NrvUcVDFvIh2CawVCWmEKXJ5AQWz2yep2OcTvaATTREQYw9H0L8iGE5b47wB1h~dYauQ0Dt7qEYnQNm5BzXaZB4RJXcrRgc2FoOrg7kY4uwV9OxTQq8ryDFXEc0C0akDI5cTJc3LY3IS7pZIziZYz5pQ__')` }}
      />
    </div>
  );
}