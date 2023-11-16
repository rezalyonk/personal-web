import React from 'react'
import styles from './indexPageNavbars.module.css'
import Image from 'next/image'
import '@/styles/Home.module.css'

export default function indexPageNavbars() {
    return (
        <>
            <div className={`${styles.containerDisplay} container-fluid`}>
                <nav className={`${styles.bagianNavbars} navbar row`}>
                    <div className={` navbar-brand col-5`}>
                        <p className={`${styles.Logo} fs-4`}></p>
                    </div>
                    <div className={`col-5`}>
                        <ol className={`${styles.bagianOl}`}>
                            <li className={`d-inline`}>Page Blog</li>
                            <li className={`d-inline`}>Portofolio</li>
                            <li className={`d-inline`}>About Me</li>
                            <li className={`d-inline`}>Kontak</li>
                            <li className={`d-inline`}>
                                <i class="bi bi-person-circle"></i>
                            </li>
                        </ol>
                    </div>
                </nav>
            </div>
        </>
    )
}
