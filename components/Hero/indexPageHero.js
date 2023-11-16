import React from 'react'
import Image from 'next/image'
import Person from '@/assets/images/me.png'
import styles from './indexPageHero.module.css'

export default function indexPageHero() {
    return (
        <>
            <div className={`${styles.containerDisplay} container-fluid`}>
                <div className={`${styles.bagianRows} row`}>
                    <div className={`${styles.bagianCols1} col-8`}>
                        <h1 className={`fw-bold d-flex justify-content-center`}>Reza Lyon Kurniawan</h1>
                        <p>at augue eget arcu dictum varius duis at consectetur lorem donec massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis</p>
                    </div>
                    <div className={`col-4`}>
                        <Image src={Person} className={`${styles.imageMe}`} width={1920} height={1920} alt='RezaLyonK' />
                    </div>
                </div>
            </div >
        </>
    )
}
