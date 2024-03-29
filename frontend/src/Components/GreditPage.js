import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Modal from  './Modal'

const GreditPage = () => {
    // let i = 1;
    const params = useParams();
    // const { Name } = useParams();



    console.log(params.Name)
    const [Gredit_Page, setGredit_Page] = useState()

    useEffect(() => {
        const GetgreditDetails = async () => {
            // e.preventDefault()

            let res = await fetch('http://localhost:100/api/GreditPage',
                {
                    method: "POST",
                    body: JSON.stringify({
                        GreditName: params.Name
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
            // console.log("fuck")
            let x = await res.json()

            console.log(x)
            if (x.error) {
                console.log("error hai")
            }
            // // console.log(x)
            else if (x === undefined) {
                console.log("undefined hai  BC")
                setGredit_Page({
                    GreditName: 'Undefined',
                    GreditDescription: 'Undefined',
                    GreditCreatorEmail: 'Undefined',
                    GreditCreatorUserName: 'Undefined',
                    GreditTags: [],
                    GreditPosts: [],
                    GreditFollowers: [],
                    GreditBannedwords: [],
                    __v: 0
                })
            }
            else {
                console.log("undefined nahi hai  BC")
                setGredit_Page(x.Gredit_Page[0])
            }
        }

        GetgreditDetails();

    }, [])

    return (
        <div>
            <section style={{ backgroundColor: '#eee' }}>
                <div className="container py-5">
                    <div className="row">
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                                    <h5 className="my-3">John Smith</h5>
                                    <p className="text-muted mb-1">Full Stack Developer</p>
                                    <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <button type="button" className="btn btn-primary">Follow</button>
                                        <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                {Gredit_Page && <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Name of Gredit</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{Gredit_Page.GreditName}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Description</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{Gredit_Page.GreditDescription}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Creator</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{Gredit_Page.GreditCreatorUserName}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Tags</p>
                                        </div>
                                        {/* <div className="col-sm-9">
                                            {Gredit_Page.GreditTags.map(({ item, index }) => (
                                                <div key={index}>
                                                    <p className="text-muted mb-0">{item}</p>
                                                </div>
                                            ))
                                            }
                                        </div> */}
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Banned Words</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div>
                                <Modal></Modal>
                            </div>

                            {/* <div className="row">
                                <div className="col-md-6">
                                    <div className="card mb-4 mb-md-0">
                                        <div className="card-body">
                                            <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                            </p>
                                            <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                                            <div className="progress rounded" style={{ height: '5px' }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                                            <div className="progress rounded" style={{ height: '5px' }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                                            <div className="progress rounded" style={{ height: '5px' }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                                            <div className="progress rounded" style={{ height: '5px' }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                                            <div className="progress rounded mb-2" style={{ height: '5px' }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card mb-4 mb-md-0">
                                        <div className="card-body">
                                            <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                            </p>
                                            <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                                            <div className="progress rounded" style={{ height: '5px' }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                                            <div className="progress rounded" style={{ height: '5px' }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                                            <div className="progress rounded" style={{ height: '5px' }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                                            <div className="progress rounded" style={{ height: '5px' }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                                            <div className="progress rounded mb-2" style={{ height: '5px' }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default GreditPage