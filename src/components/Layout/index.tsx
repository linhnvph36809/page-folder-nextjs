import { useTranslation } from "react-i18next";
import '../../i18n'
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    return (
        <>
            <div className='flex gap-x-2'>
                <button className='text-sm' onClick={() => changeLanguage('en')}>English</button>
                <button className='text-sm' onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
            </div>
            {children}
        </>
    )
}

export default Layout