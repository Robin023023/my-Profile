import React from 'react'

import styles from './Resume.module.css'

export default function Resume() {
  return (
    <div id='Resume' className={styles.Resume}>
      <p className='text-center pt-5'>My Resume</p>
      <h1 className='text-center'>10+ YEARS OF EXPERIENCE</h1>

   
      <div className='row mt-5 px-4'>
        <div className='col-md-2 d-none d-xl-inline'>
        <div className='d-flex'>
        <div>
          <div className={styles.hr}></div>
        </div>
        <div className={styles.text}>
          <div className='d-flex'>
              <div className={styles.dot}></div>
            <div>
              <h3>Education</h3>
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex'>
        <div>
          <div className={styles.hr}></div>
        </div>
        <div className={styles.text}>
          <div className='d-flex'>
              <div className={styles.dot}></div>
            <div>
              <h3>Software Skills</h3>
            </div>
          </div>
        </div>
      </div>


      <div className='d-flex'>
        <div>
          <div className={styles.hr}></div>
        </div>
        <div className={styles.text}>
          <div className='d-flex'>
              <div className={styles.dot}></div>
            <div>
              <h3>Experience</h3>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div className='col-md-10 m-auto'>
          <div className='row bg-light p-5 my-4'>
            <div className='col-lg-4 border-end'>
              <h3>BSc in Computer Science</h3>
              <p>University of ULAV (2018 - 2022)</p>
              <p>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
            </div>
            <div className='col-lg-4 border-end mt-5 mt-lg-0'>
              <h3>AS - Science & Information</h3>
              <p>University of ULAV (2016 - 2018)</p>
              <p>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
            </div>
            <div className='col-lg-4 mt-5 mt-lg-0'>
              <h3>Secondary School Education</h3>
              <p>Kindergarten (2006 - 2016)</p>
              <p>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
            </div>
          </div>


          <div className='row bg-light p-5 '>
            <div className='col-lg-4 border-end'>
              <h3>UI/UX Design</h3>
              <div className='d-flex'>
              <p>Figma</p>
              <div className={styles.border}></div>
              <p>90%</p>
              </div>

              <div className='d-flex'>
              <p>Adobe</p>
              <div className={styles.border}></div>
              <p>85%</p>
              </div>

              <div className='d-flex'>
              <p>Photoshop</p>
              <div className={styles.border}></div>
              <p>80%</p>
              </div>
            </div>
            <div className='col-lg-4 border-end'>
              <h3>Web Developer</h3>
              <div className='d-flex'>
              <p>WordPress</p>
              <div className={styles.border}></div>
              <p>90%</p>
              </div>

              <div className='d-flex'>
              <p>Mockplus</p>
              <div className={styles.border}></div>
              <p>85%</p>
              </div>

              <div className='d-flex'>
              <p>Weebly</p>
              <div className={styles.border}></div>
              <p>80%</p>
              </div>
            </div>
            <div className='col-lg-4'>
              <h3>App Development</h3>
              <div className='d-flex'>
              <p>Quixy</p>
              <div className={styles.border}></div>
              <p>92%</p>
              </div>

              <div className='d-flex'>
              <p>AppyPie</p>
              <div className={styles.border}></div>
              <p>87%</p>
              </div>

              <div className='d-flex'>
              <p>iBuildApp</p>
              <div className={styles.border}></div>
              <p>82%</p>
              </div>
            </div>
          </div>


          <div className='row bg-light p-5 my-4'>
            <div className='col-lg-4 border-end'>
              <h3>Web Developer & Trainer</h3>
              <p>Brac Developer Team - (2012 - 2016)</p>
              <p>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
            </div>
            <div className='col-lg-4 border-end'>
              <h3>Front-end Developer</h3>
              <p>Brane - (2020 - 2011)</p>
              <p>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
            </div>
            <div className='col-lg-4'>
              <h3>UI/UX Designer</h3>
              <p>Google Out Tech - (2017 - Present)</p>
              <p>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
   
  )
}
