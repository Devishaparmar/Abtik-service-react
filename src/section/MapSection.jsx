
const MapSection = () => {
    return (<>

        <div className=" px-6  md:px-16 bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] space-y-6 ">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-400 font-bold mb-5 leading-tigh text-center">Our Presence</h2>
            <div className="  w-full ">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4045673256455!2d72.51250407436834!3d23.04562491546931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f8ee324da2af39%3A0xf04a9f002154b683!2sAbtik%20Group%20of%20Companies!5e0!3m2!1sen!2sin!4v1744442565579!5m2!1sen!2sin"
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full min-h-96 rounded-2xl border-4 border-[#007AFF]"></iframe>
            </div>
        </div>
    </>)
}
export default MapSection