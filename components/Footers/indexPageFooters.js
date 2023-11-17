import React from 'react'
import styles from './indexPageFooters.module.css'

export default function indexPageFooters() {
    return (
        <>
            {/* Footer */}
            <div className={`${styles.containerDisplay} container-fluid`}>
                <footer className="row">
                    <div className="col">
                        {/* <p className="text-start">
                            {" "}
                            Jalan Suroyo No. 161 Mayangan Kota <br />
                            Probolonggo 672000
                        </p>
                        <p className="text-start">binarcarrental@gmail.com</p>
                        <p className="text-start">081-233-334-808</p> */}
                    </div>
                    <div class="col">

                    </div>
                    <div className={`${styles.bagianCols3} col`}>
                        <h5 className="fs-6"> Page Blog</h5>
                        <h5 className="fs-6"> Portofolio</h5>
                        <h5 className="fs-6"> About Me</h5>
                        <h5 className="fs-6"> Kontak</h5>
                    </div>
                    <div className={`${styles.bagianCols4} col`}>
                        <h5 className="fs-6 d-flex justify-content-center">Connect with us</h5>
                        <ol>
                            <li className={`d-inline`}><i class="bi bi-facebook"></i></li>
                            <li className={`d-inline`}><i class="bi bi-instagram"></i></li>
                            <li className={`d-inline`}><i class="bi bi-twitter"></i></li>
                            <li className={`d-inline`}><i class="bi bi-envelope"></i></li>
                        </ol>
                    </div>
                    <div className={`${styles.bagianCols5} col`}>
                        <h5 className="fs-6 d-flex justify-content-center">RezaLyonK Newslatters</h5>

                        <div className="input-group my-4">
                            <input type="text" className="form-control" placeholder="Masukan Email" aria-label="Masukan Email" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                                Submit
                            </button>
                        </div>

                    </div>
                </footer>
            </div>
            {/* End Footer */}
        </>

    )
}
