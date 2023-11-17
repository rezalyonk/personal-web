import React from 'react'
import styles from './indexPageCards.module.css'
import Image from 'next/image'
import flyticket from '@/assets/images/flyticket.png'
import personalweb from '@/assets/images/personalweb2.png'


export default function indexPageCards() {
    return (
        <>
            <div className={`${styles.containerDisplay} container-fluid`}>
                <h1 className={`${styles.bagianH1} fw-bold d-flex justify-content-center`}>My Project</h1>
                <div className={``}>
                    <div className={`${styles.bagianRows} row row-cols-1 row-cols-md-2 g-4`}>
                        <div className={`${styles.bagianCols1} col`}>
                            <div className="card">
                                <Image src={flyticket} width={1920} height={1920} className={`${styles.bagianImage1} card-img-top img-fluid`} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Flyticket</h5>
                                    {/* <p className="card-text">
                                    This is a longer card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </p> */}
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.bagianCols2} col`}>
                            <div className="card">
                                <Image src={personalweb} width={1920} height={1920} className={`${styles.bagianImage2} card-img-top img-fluid`} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">My Web</h5>
                                    {/* <p className="card-text">
                                    This is a longer card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
