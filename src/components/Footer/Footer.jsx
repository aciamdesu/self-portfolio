import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return(
        <div className='btn__section'>
            <div className="social__btn">
                <a className='a__btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 24 24" height="24" width="24"><title>logo-linkedin</title><g><path d="M21.9 2.192H23v18.616h-1.1Z" fill="currentColor" stroke-width="1"></path><path d="M20.808 20.808h1.093v1.1h-1.093Z" fill="currentColor" stroke-width="1"></path><path d="M20.808 1.093h1.093v1.1h-1.093Z" fill="currentColor" stroke-width="1"></path><path d="M19.708 3.285h1.1v16.431h-1.1Z" fill="currentColor" stroke-width="1"></path><path d="M2.185 21.907h18.623V23H2.185Z" fill="currentColor" stroke-width="1"></path><path d="M3.285 19.715h16.423v1.093H3.285Z" fill="currentColor" stroke-width="1"></path><path d="m16.423 10.954 -1.093 0 0 -1.1 -2.192 0 0 1.1 -1.093 0 0 -1.1 -2.192 0 0 6.577 2.192 0 0 -3.285 1.093 0 0 -1.1 1.1 0 0 1.1 1.093 0 0 3.285 2.192 0 0 -4.384 -1.1 0 0 -1.093z" fill="currentColor" stroke-width="1"></path><path d="M5.47 9.854h2.192v6.577H5.47Z" fill="currentColor" stroke-width="1"></path><path d="M5.47 6.569h2.192v2.192H5.47Z" fill="currentColor" stroke-width="1"></path><path d="M3.285 2.192h16.423v1.093H3.285Z" fill="currentColor" stroke-width="1"></path><path d="M2.185 0h18.623v1.093H2.185Z" fill="currentColor" stroke-width="1"></path><path d="M2.185 3.285h1.1v16.431H2.185Z" fill="currentColor" stroke-width="1"></path><path d="M1.093 20.808h1.093v1.1H1.093Z" fill="currentColor" stroke-width="1"></path><path d="M1.093 1.093h1.093v1.1H1.093Z" fill="currentColor" stroke-width="1"></path><path d="M0 2.192h1.093v18.616H0Z" fill="currentColor" stroke-width="1"></path></g></svg>
                </a>
                <a className='a__btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 24 24" height={24} width={24} >
                        <g>
                            <path d="M1.093 16.431h1.093v2.185h1.1v1.1h1.093v1.093h2.192v1.1h2.192V23h5.477v-1.093h2.185v-1.1h2.192v-1.093h1.093V18.616h1.1v-2.185h1.093v-2.192H23v-5.477h-1.1V6.569h-1.093V4.377h-1.1V3.285H18.616V2.192h-2.192V1.093h-2.185V0h-5.477v1.093H6.569v1.1H4.377v1.093H3.285v1.093H2.185v2.192H1.093v2.192H0v5.477h1.093ZM5.47 6.569h1.1v1.1h1.093v1.093h1.1v1.093h2.185V6.569h1.1V5.477h4.377v1.093h1.1v2.192h2.185v1.093H18.616v1.1h-1.093v3.285h-1.1v2.192h-1.093v1.093h-1.093v1.093H6.569v-1.093h1.093v-1.093h1.1v-1.1h1.093v-1.093h-2.192v-1.093H6.569v-1.1H5.47Z" fill="#222831" strokeWidth={1} />
                            <path d="M14.238 7.669h2.185v2.185h-2.185Z" fill="#222831" strokeWidth={1} />
                        </g>
                    </svg>
                </a>
                <a className='a__btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 24 24" height="24" width="24"><title>logo-discord</title><g><path d="M21.9 6.569h-1.093V4.377h-1.1V3.285H18.616V2.192h-2.192V1.093h-2.185V0h-5.477v1.093H6.569v1.1H4.377v1.093H3.285v1.093H2.185v2.192H1.093v2.192H0v5.477h1.093v2.192h1.093v2.185h1.1v1.1h1.093v1.093h2.192v1.1h2.192V23h5.477v-1.093h2.185v-1.1h2.192v-1.093h1.093V18.616h1.1v-2.185h1.093v-2.192H23v-5.477h-1.1Zm-1.093 8.762h-1.1v1.1H18.616v1.093h-1.093v1.093h-4.384v-1.093h3.285v-2.192H6.569v2.192h3.285v1.093h-4.384v-1.093H4.377v-1.093H3.285v-1.1H2.185v-5.477h1.1v-2.185h1.093V6.569h1.093V5.477h4.384v1.093h3.285V5.477h4.384v1.093h1.093v1.1h1.093v2.185h1.1Z" fill="#222831" stroke-width="1"></path><path d="M13.139 9.854h2.192v2.192h-2.192Z" fill="#222831" stroke-width="1"></path><path d="M7.662 9.854h2.192v2.192h-2.192Z" fill="#222831" stroke-width="1"></path></g></svg>
                </a>
                <a className='a__btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 24 24" height="24" width="24"><title>logo-social-media-instagram</title><g><path d="M21.9 2.192H23v18.616h-1.1Z" fill="#222831" stroke-width="1"></path><path d="M20.808 20.808h1.093v1.1h-1.093Z" fill="#222831" stroke-width="1"></path><path d="M20.808 1.093h1.093v1.1h-1.093Z" fill="#222831" stroke-width="1"></path><path d="M2.185 21.907h18.623V23H2.185Z" fill="#222831" stroke-width="1"></path><path d="M19.708 3.285H18.616V2.192H4.377v1.093H3.285v1.093H2.185V18.616h1.1v1.1h1.093v1.093H18.616v-1.093h1.093V18.616h1.1V4.377h-1.1ZM18.616 17.523h-1.093v1.093H5.47v-1.093H4.377V5.477h1.093V4.377h12.053v1.1h1.093Z" fill="#222831" stroke-width="1"></path><path d="M15.331 5.477h2.192v2.192h-2.192Z" fill="#222831" stroke-width="1"></path><path d="M15.331 8.762h-1.093v-1.093h-5.477v1.093h-1.1v1.093H6.569v5.477h1.093v1.1h1.1v1.093h5.477v-1.093h1.093v-1.1h1.093v-5.477h-1.093Zm-1.093 5.477h-1.1v1.093h-3.285v-1.093h-1.093v-3.285h1.093v-1.1h3.285v1.1h1.1Z" fill="#222831" stroke-width="1"></path><path d="M2.185 0h18.623v1.093H2.185Z" fill="#222831" stroke-width="1"></path><path d="M1.093 20.808h1.093v1.1H1.093Z" fill="#222831" stroke-width="1"></path><path d="M1.093 1.093h1.093v1.1H1.093Z" fill="#222831" stroke-width="1"></path><path d="M0 2.192h1.093v18.616H0Z" fill="#222831" stroke-width="1"></path></g></svg>
                </a>
            </div>
        </div>
    )
}

export default Footer