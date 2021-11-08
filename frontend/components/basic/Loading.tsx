import React, { ReactElement } from 'react'

interface Props {

}

function Loading({ }: Props): ReactElement {
    return (
        <div>
            <div className="loadingAll">
                <div className="loadingContainer">
                    <div className="loadingCircle" />
                </div>
                <div className="loadingContainer">
                    <div className="loadingCircle" />
                </div>
                <div className="loadingContainer">
                    <div className="loadingCircle" />
                </div>
                <div className="loadingContainer">
                    <div className="loadingCircle" />
                </div>
                <div className="loadingContainer">
                    <div className="loadingCircle" />
                </div>
                <div className="loadingContainer">
                    <div className="loadingCircle" />
                </div>
                <div className="loadingContainer">
                    <div className="loadingCircle" />
                </div>
                <div className="loadingContainer">
                    <div className="loadingCircle" />
                </div>
                <div className="loader">
                    <div className="load-loadingCircle" />
                </div>
            </div>
        </div>
    )
}

export default Loading


