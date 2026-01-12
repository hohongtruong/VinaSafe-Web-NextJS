
export default function FloatContact() {
    return (
        <div className="fixed left-5 top-1/3 z-50 flex flex-col gap-2">
            <a href="tel:0888855769">
                <img
                    src="/images/icon/phone_icon.png"
                    alt="Phone"
                    className="w-10 h-10"
                />
            </a>
            <a href="mailto:kinhdoanh.vns@vinasafe.vn">
                <img
                    src="/images/icon/email-icon.png"
                    alt="Email"
                    className="w-10 h-10 animate-bounce"
                />
            </a>
        </div>
    );
}