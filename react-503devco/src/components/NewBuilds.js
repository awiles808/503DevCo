
import * as React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";

export const  NewBuilds = () => {

    const [index, setIndex] = React.useState(0);

    const images = [
        {
            src:
                "https://previews.dropbox.com/p/thumb/AAki0xsEgw_TuIQvhnI4RDz3Ksq37w3PjKioyVtfAFqwZnFe4muS6NAV-mJnwkSiahG3z-Q0shLukPj3MdBYdMMJTvQWktM4C7iwE5ez3dsXrpjApM2rk7AJIXstKeWuRZz9Oh3f7IWS4vI6B9vufoUywm8kvpd0QLj1TrxStKT7VpULjJ2_I9RC1Za5nX4nU3aC0rueLMD1Fh7eLFxYLlmmwXYo0dnn3y2ZijpSpe9f3g0JoboNemV-VQWkwRIWyHDwjdPufGfuOfIq15r3qTnCxttAzl_QwaxLze3oSwvSPypnw0YN3AQtvPZ9KvTHRP2htDYYua0hfjhxQgVp_R5sVVCvIAMTvZnZ3ClImhZ2ydupDy8-SJBcLi0UCt-4PEw/p.jpeg?fv_content=true&size_mode=5"
        },
        {
            src:
                "https://previews.dropbox.com/p/thumb/AAmmSvbbmVuHjpyNmRVrIzqi10JVbypmetkrZ4u8Ka9zTCQGi-4D4xIfMX2RroiUHO6fzCZFlhTQTG-4MmFZazWi0mD0eW8ojy5jnZWC22ZrJdod3Ck6xYjL0C-tVqfU-MBMLPsNFivPeiwonJTMTacpdytHOuW-hSU1lT4Wq2gUF0z6YKSXo1MD53do2GYo8i5TQSMjkOmEyZ5Hh8EdnldeGZrjD1WVZdXfk18Oj0RjnthzqSsfB8BOiEpRXKpdYtEZkkRDidfoenjCTmWP2WmivSx54jRccIJChRwBC_wLc9VzLJiST2XOQygNxSIHSPDfrdQB2Jv-Y9miWW9mcx-tzTq75b4ly-0jaFp_mdviHQ/p.jpeg?fv_content=true&size_mode=5"
        },
        {
            src:
                "https://previews.dropbox.com/p/thumb/AAloJNNVXkLZg612Dv0dLflHzBlGOB-g6m2yeqNWJO4vMSKrGLG-MScq-rU5w9kMFrhIn5Qz_CRqynfZCCbkyvyuOhUdK99emVxF33XwJAKTAcnaI-6_7ctDOk1R0PGW282xpqpM_kn9kyg6lAe2fE8BwDIomXvKowyDaxdw3lGw-aTftpN4vSy-FqzLssaw2SjMCcxO7VSI_EDFeTAnGkmJT_Mwi_xaF_8ALodctffL7fYlwxJVZgh03O60ti2RqBst0Y2EQ6MDmyE76O6NX96aBRc9VsRVsQPzDqjEqz1pWO9bBQ-PyeTCh932JF0V7PJiLqwwU8bRTBgGf-YAStfF8hXYo6s5TJjURjnZM91h2w/p.jpeg?fv_content=true&size_mode=5"
        },
        {
            src:
                "https://previews.dropbox.com/p/thumb/AAnzEOqCzIHgTMDFs5NcmUornY7FUxsLclcKY7pu7e_pwIEcKOnsIvud_B1mrzb_HREu4iJ5a16DMNMfp8sC4VxC-kq-btS2lkYQH1BIfqOS-oftAEcHnJkHmEMaPjJbXB-qlPhxZIxh_35X6ytTnSXNO-YnwJ_Ac-8wdufDpAVdK14zK3S2EjvYGEgfTHEb_nU1kMdF50kWUlq8Ryid75ZA-uI1OztlT7F7sSI3IEktsmnxNBT56KQH5jZG3zEoM4b_5mZKsslCYXoN954rtGBYmdVjXYDTiCM8QkmgKq939cBOVoMuzi6lWtk1S3OCw8gr95DJlkJ0iMe2iAK46tADY3sLCTMiz_czuKYBnoFEQQ/p.jpeg?fv_content=true&size_mode=5"
        },
        {
            src:
                "https://previews.dropbox.com/p/thumb/AAk4SMFklAZ_2ZOF3Ny3_P004frMj5ewKBMmUTHGqxklDQZjGs8LcQKynZzYrf5UKHF5QOvio7Wkhxr86kpU4nSO3Bn94Tx0tgNrpzv2GoPGdzXMgwrIfwrsowosTUhwes3zRb7d7WK2Q-Bd3oBbCybbhqG3nvJUIvaecpuZpD7O1udwhFs3fh6yl5hWV0apbq2bfOhCQVNrOBtra965ChR7biz76NsFcNBx9_Muz4dgE6POEqs4SbvDEec_O3qUwKrLXWq-FGgyAWUFWmclyWPXfOZWAeJNW_ePRWbWEt0xOQk3EUiiuPdeHOOYaereacoSxC0bvh4OLZrzwIr5HQbfRyYNx49MUpTqjSyRW_H-rg/p.jpeg?fv_content=true&size_mode=5"
        },
         {
            src:
                "https://previews.dropbox.com/p/thumb/AAlzKIRNg5ml9t5z-rgJdiu30nMMLiMeshSVa11erplzfKoEqpCNAqoTZAf4OPtbXqB_ENXm4e3KVeScyHSn9nEh4m2tbE7Die8AV-s2LfGD7viMFXolEiH_QcvbU0l8OL0hRl7fK0cVzFlfHX_lehgJi5EiY5qQWsMEbYAmOhVCnTn_eVttBVjASVH_3vBPiKDLnAnjcVXqVE-1AfYXnSRbpGs_rB9Ic4M96l8VbyN9xwAX1CvHaUENFdp3GFCnp8APQYUjKIY1AiOjtKvw0is4VwvTo190rYJs8ghuXaBNO4wKrvWpcb4MimJSzZvXBgxArEsRHgEDVAJesgOiFqt5yigr4_0ziG8yrg7ACu37xQ/p.jpeg?fv_content=true&size_mode=5"
        },
        {
            src:
                "https://previews.dropbox.com/p/thumb/AAnCwutRSjDYUHlEMu-aZiDAksdlRbZDrD7uECM2tZEzJ-gL9Yzq6RHEPhiMQ9KskE66XRBuZ9cTGXqc5SkseMyUwHFzUfbQS72T6qCk9C_A1nh4MAFsFymLu1FF5X6TnVa5CRagx0E0Db3jcefbfp2zr8zZThzs8sbJD-xdCVnmbPY2UA0qIL3VevtKjw27HWxsF_1rT1_nmBYAMZffNznBE3tJK33uZeT_89-MHSa3Rxb608lLzy5t4ZPibMrYe3V2J7NkKA6tr8Tp2kRmjplMu6Zb6zw4Pd1414gCbU8D3__uKmkMbveOVRTynqgUr-5Bvotv0G3MP9bv48ZfWcTDUy9M3zjjH_TqN4WOBtDLHw/p.jpeg?fv_content=true&size_mode=5"
        },
        {
            src:
                "https://previews.dropbox.com/p/thumb/AAngDDENQW_jYqnhnkkhVFdXoHbCRNy72W5WWoxgLwcdOolNszbNOIE2glf6ls7wwTjdsmLR0IrpOVe9XwF1mHERtOXvxlNJsKJIaCfZF_Cn74rDWfBo2gorQ_HHzhWBZm7cA3v_ahEB7bqpSkkGi9sM9HSkkfeIZsPaH2ABIkAzodxRqd8rGtil97PhO7rEboPDeyFV7vJx51YRilZuSHwlDXzSM0DgtO5nLQuRrCR9fPleHAPxHwA7rtnMh7IOYZWfx4qiNB9kwgPef8yHOO3ujPJN972xX43Ah_tS4FB2y_qF_fAN__wzMS5IHTwgQq4u75bUboEmrb_tjNnwFszSp4p71bxFkMeYUctcrmBDag/p.jpeg?fv_content=true&size_mode=5"
        },
        {
            src:
                "https://previews.dropbox.com/p/thumb/AAne8_a7fFjAAHM900ZikpSRlfK4pLjQnLHZjo4FC1SaI5uaZV5P3l417YfcutQKzqS18llgJtI-fMPciRX8XR5YeCFzCRtUbu3l6qTiAB7Qm1-VdzZJMvWD0MB6ofakK_nYBSQ4YX0nuxuaWUj6R25PdXifbN99ryYES4ahgDb5oXT8Nv28sY4jQzG4nXgpO4XmI5Cp7tClIpGZWrjDy5JMIWcKAd26zNbhnFR_KwE8HHunPlBZtFGag8n6v3S0QVCNriv92zep2lXEV1Cz7N8v1fHuCcsBpRwj5Nq6o3VejnMeuZSOQSpma7_39PFwiQTPy3VrIVvXP4wNHXAE-sj-YHeQtiHoYoqW5KbWYLRXHw/p.jpeg?fv_content=true&size_mode=5"
        },
     {
            src:
                "https://previews.dropbox.com/p/thumb/AAk8sQnnAgo1RsPhBtiuzX23uP_U6NOZ18d32xcun-9hHHOnRhk8HdDvjAMiMVZKhr1h_O5jSz09dV5lj1c7cURfsRRD3sWYCxECgFA2HItr1l0E0dpG5q5e4w0JbclAn5F-qDlDswyZpCsViWOH4JzhGH_oMC56whMFJEAq1p-skLGcyVUOvfIqpQoYRrrPrxaNpUsq5fV0dbdxVZCyDr_XCFT74GaT4L1ztZ1vyVFTF5zzXAa8W5N1Dbbz5oua1c9sQiG_-l7vDJzegawyXlNbxmGJkjKzjINJMx1_chO_AkKczXJtBvDuEjGTl_gYBoBr25oOWxbid1SKDY39pDDPEpanv6Xh9u-8okYY78zbew/p.jpeg?fv_content=true&size_mode=5"
        }
    
    ];

    return (
        
        
        <div style={{ background: "black", width: "100vw", height: "100vh" }}>
            <Gallery
                index={index}
                onRequestChange={i => {
                    setIndex(i);
                }}
            >
                {images.map(img => (
                    <GalleryImage objectFit="contain" key={img.src} src={img.src} />
                ))}
            </Gallery>
        </div>
       
        
    );
}






























// import React from "react";
// // import ReactDOM from "react-dom"
// import { Gallery, GalleryImage } from "react-gesture-gallery";
// import fiveothreelogo from '../assets/fiveothreelogo.png';

// const images = [
//     {
//         src:
//             { fiveothreelogo }
//     },
    
//     // "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1356&q=80",
//     // "https://images.unsplash.com/photo-1557389352-e721da78ad9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//     // "https://images.unsplash.com/photo-1553969420-fb915228af51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
//     // "https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//     // "https://images.unsplash.com/photo-1550640964-4775934de4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
// ];

// export const New Builds = () => {
//     const [index, setIndex] = React.useState(0);

//     React.useEffect(() => {
//         const timer = setInterval(() => {
//             if (index === 4) {
//                 setIndex(0);
//             } else {
//                 setIndex(prev => prev + 1);
//             }
//         },10000000000);
//         return () => clearInterval(timer);
//     }, [index]);

//     return (
//         <Gallery
//             style={{
//                 background: "black",
//                 height: "100vh",
//                 width: "100vw"
//             }}
//             index={index}
//             onRequestChange={i => {
//                 setIndex(i);
//             }}
//         >
//             {images.map(image => (
//                 <GalleryImage objectFit="contain" key={image} src={image} />
//             ))}
//         </Gallery>
//     );
// }
// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<New Builds />, rootElement);

