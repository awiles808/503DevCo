import React from "react";
// import ReactDOM from "react-dom"
import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = [

    "https://previews.dropbox.com/p/thumb/AAkJoY0fX0q6fgFYj8q2HniqFQjPo5q7dcVQ_WGEuEuPUanbuydNwB5Q0mqJfr3g5irUOPp-lrruYGq3p2nl2zU7Y7EYNHTCoJoCly7AYwaT6tW1a-AEcMrjmod2nlxxRFG6Lfh36z4eQFvXQYf8iEaMRlY5YmXiG7nQrc5VpazbDFefWljWZIAyDm1PkTCdbnoUOwLs9WxTbM9FlNSBABzZ31v659QnQdRep17Hv2p6yKp6mU0gOzSf_JoVhMo6z3yDn0jXFhYKhP-JIg_JO6a5DtN4T6c32cDHYVE-U63JTEi3pqpUzqh6ubauhowIRZ1dJGALf21vF3AUNTlj2R_kVupdW_Aoj7J-qwAyhHi_pg/p.jpeg?fv_content=true&size_mode=5",
    "https://previews.dropbox.com/p/thumb/AAktaVVLe8jYrPrdATB4A_xgDxsT1jWZ5QKh0a0S5FpWryxRYKnb_8aR5PfivcP_ogb56pZqsw1XJeINYkMmx0zp6-P5BwfFm7s_jaVxLSK1xE5pChYPkuxKdILXtPxD0RxY5NYRB2-fkWgpcs73YxWRA_YcvdzcFam_rSz-JVMN7zARCNUI8cZy-kUT8R_gxPsgmNoKCIUGwPqUNhkHfkiGLV6rX1dh7OtEqcO0E8CP4MkeT-oGZaKXaxyjo4_87l1ommFnlaQO0nyFxZXkx4bWIkOTdRoJf7RyVHXYIFydG1BvwE3XscmEwiQEk-6ApM5cysz_jx8CnWRv9Th0DkoAtA7qN-p5b_GZKpVX_PZq_Q/p.jpeg?fv_content=true&size_mode=5",
    "https://previews.dropbox.com/p/thumb/AAkSpe53bey6nn6OEJQhUUxgOieESGxl5mduTb0VxUXrLpWr7dLlegTJZidt2gsnBUTRajwFYzrF3D8aNRPEsXLrM6zezYJH7VVpDWc1dBoIBTpP_x9CvNnCW5nhtWxKmBTscbGEEzqOnhlUMu_A-dRrg_EMQc2ToYp5QvWA92n8pOoZq_3XLJ08lHlFtKflrtFAonGxlk5bqKuaHu2Vl6wRYz1_OW2ZfbvSDW5NMnBVOWtJtmM8FsMM-3D2F9Y-RG9tNlNJLLJ_T1c8er1kWZ2Rqd8hKnjPbuuopjdm8V7CGyUbUuCLHg0D_Zz9hhc8xjdAM_rm2bzDJU6GRTe9bZ1ihmpgPDVsbPKCre22d0wZdw/p.jpeg?fv_content=true&size_mode=5",
    "https://previews.dropbox.com/p/thumb/AAn4FDOcLR15y1TWE2M255fROKe76FqRQq3aH_Arj4Em8j4tEiOUiu6uwThaBgsVwpXEJ7w3L87zuWytqbkZOMM3xgHQ-RoDB2sRRrSz4U_vX-TQXjR64D84zEl98E_CdDLXp_Z_sQeN1cBgE-KTADwYqSP_DG5g83gS9JTmquGspo_3GVPdW7HssPuDKRbTUh1kRm-JpE29odrQHOG5_Wdde85i-v43iKnXQUy0oryOl8d2J92KRwlvldUKw58Kv1RlHsfnQxSfkqrRdEIRgvtt2Lph97HkWyuAYgGPmbQTytw6HUvrhJz3mKFPGJEvIFl92xo1OVmlSf0ufGZjmj4blFxIuCswJRIFxjd9ceAXVg/p.jpeg?fv_content=true&size_mode=5",
    "https://previews.dropbox.com/p/thumb/AAkKr33xE4dGZBrGO2Gu1jqueluSyBVRArPPd12zDPY8OJINPDYTDsxoH8bnImu2dDzU3OwBtm7bewTqhLzN4WTNxw4mYVlSqa2I0sYE1h7tN9HTWovqRJrFS20a56p-98yso5leSxYeWzNBJvoXWA8Nslodzt8ix9TbCY0TKQVLYyMSNo6SX2Q-yKbNJnhSuLZNTlL4HvU2Nzk3Sh6GdGsewhh3qkAff0We-SGq4Xg6_M_4cPF6biMOqAp-Q0q4UQEk07r4YQCWWvYXI0lvK-33xIegYMkvy87OXvQEMPKfUf1-FMbieLYiKEXMRIVHdmcZIJul3q2koJfb3-LopkT83Q-U298PqrJm6zE45zTH0g/p.jpeg?fv_content=true&size_mode=5",
    "https://previews.dropbox.com/p/thumb/AAlJSu0iXRveWrRd7y6H2y1yIumDEodFfrIfiBEDomwbFKJQMyOjtKBg4bh0mRhWmJQVqmJO3ZZsoCfoigw9hvOtA3bbUKPJRi1ADkPaBmuHCMhcRYIJFKUnKa-akiIYR6soE69slvuw24z-r5NttngI4be5EQI9WIMVcdg00BVNmVZDMwLMTmi-oBTVUtxQTPjKpZEgn_BKmGb_9VPefEyVfkucqr8jZDuB9SURYv0kkx6S1t2fRK4HXWR6GDAHhF-ODvCkzt1K26YrZPcAU4EmsL9lRV58O6US6N97Km3uQKoTDzVsj8xT7U77_D3JkP9H6POTZH1hGNqQNazOVaORriE6jEOP5pTQ8chMIapSxA/p.jpeg?fv_content=true&size_mode=5",
    "https://previews.dropbox.com/p/thumb/AAlXVLmjAAaIeH8JYJHpG9vj_cTuf3AfCQgxpIgD5yqFDhUxS3VTLYYXze54TFYLRbEvWuA-4cKsKUxMhiBCudUvPjNH-VXJxjisxcb6SIQhFGJW3QF6ryQU3k1TLQVAkBl6u_bNyML5_FEjTpBfkMSnSKCdjpT97gPHsR0EIC67UbIaWmPw7iDBwlqcH3gT5NSCDUKbfH4dXph0kC2DJRscAmMER4Igslsn_IX6_UCJOf9nRW2b7kfjVv8knlIoTAt0mq5ym8DZoucD38qisQUumkLLIi3hRQwSO4x6JcrZmib3UsqxG1fAVI3kS0BZySZMXfdKs2rI2f_G1yhZBkaO-H_Qhta3K5T1c03RC9oOLA/p.jpeg?fv_content=true&size_mode=5",
    "https://previews.dropbox.com/p/thumb/AAk8E_7najNddbTAX387XW3M2bSNzd97YxeM9eMVrxZlDNiwX3YFF8xUiIA-5IFyO16i1Tvgci7rpz5xh243Dmgwm7MdUkhkkOG6j3AKl60gK0y9gCf6Cf02pFHdUJbEf1Nw6vlrWfPIXMXt81PF11CmfqCqaKsXJ_sUgdIy1_q2N-osTGQcuo2QIFxVnopV4_5gPTUZ4RyggCvkEJCczROFek0BILYHx_YHE5ORaajxPiv8icTk1l5-LlT7I2ziqGwjSE9UV9bjbXzEast-EqMBh2TCjF81Q9Zwgg8B7fxmZOmLbZ6pqgRPfiz5_tOtNwJP1Vsrx2vwpXe_hWsmg-N3_2Afsj8VJcw3jVc6WXP3OA/p.jpeg?fv_content=true&size_mode=5"
    
];

export const Flips = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            if (index === 4) {
                setIndex(0);
            } else {
                setIndex(prev => prev + 1);
            }
        }, 10000000000);
        return () => clearInterval(timer);
    }, [index]);

    return (
        <Gallery
            style={{
                background: "black",
                height: "100vh",
                width: "100vw"
            }}
            index={index}
            onRequestChange={i => {
                setIndex(i);
            }}
        >
            {images.map(image => (
                <GalleryImage objectFit="contain" key={image} src={image} />
            ))}
        </Gallery>
    );
}
// const rootElement = document.getElementById("root");
// ReactDOM.render(<New Builds />, rootElement);
