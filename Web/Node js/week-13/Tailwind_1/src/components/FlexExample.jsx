import React from 'react'

const FlexExample = () => {
  return (
    <div >
        <div>
            {/* An h2 element for the title with Tailwind classes for margin-top, text size, and font weight */}
            <h2 className="mt-4 text-[30px] font-bold">Flexbox Example using Tailwind</h2>

            {/* A flex container using Tailwind's flexbox utilities, centered items, and a gap between children */}
            <div className="flex justify-center gap-2">
                {/* A child div with a red background and padding */}
                <div className="bg-red-200 p-3">Child 1</div>

                {/* A child div with a green background and padding */}
                <div className="bg-green-200 p-3">Child 2</div>

                {/* A child div with a yellow background and padding */}
                <div className="bg-yellow-200 p-3">Child 3</div>
            </div>
        </div>
    </div>
  )
}

export default FlexExample