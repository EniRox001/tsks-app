import { AppBar, Link, Toolbar } from "@mui/material";

interface NavigationBarProps {
    title: string;
    onClick: () => void;
}

const NavigationBar = ({title, onClick}: NavigationBarProps) => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Link onClick={onClick} sx={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'white',
                    cursor: 'pointer',
                    textDecoration: 'none'
                }}>{title}</Link>
            </Toolbar>
        </AppBar>
    )
}

export default NavigationBar