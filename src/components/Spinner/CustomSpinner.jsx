import React from 'react'

export const CustomSpinner = () => {
    return (
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-primary flex items-center justify-center">
            <div className="animate-pulse rounded-full h-16 w-16 border-l-2 border-r-2 border-primary flex items-center justify-center ">
                <div className="animate-pulse rounded-full h-10 w-10 border-t-2 border-b-2 border-primary flex items-center justify-center ">
                    <div className="animate-blind rounded-full h-6 w-6 border-l-2 border-r-2 border-primary flex items-center justify-center ">
                    </div>
                </div>
            </div>
        </div>
    )
}
