import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { FiPlus } from 'react-icons/fi';
// import { Link } from 'react-router-dom';

export default function DropdownButton({ menuItems, onCategoryClick }) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleMenuItemClick = (item) => {
        if (item.label === 'Category') {
            onCategoryClick();
        }
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Stack direction="row" spacing={2}>
            <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                sx={{
                    whiteSpace: 'nowrap', 
                    overflow: 'hidden', 
                    textOverflow: 'ellipsis', 
                    background: 'linear-gradient(to right, #182F59 88%, #0D1C3C 12%)',
                    width: '150px', 
                    color: '#FFFFFF', 
                    padding: '8px', 
                    '&:hover': {
                        background: 'linear-gradient(to right, #182F59 88%, #0D1C3C 12%)', 
                    },
                    fontSize: '16px',
                    position: 'relative',
                }}
            >
                <FiPlus className="text-2xl mr-2 text-white" />
                Select currency
                <div className="absolute right-1">
                    <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.292787 1.29308C0.480314 1.10561 0.734622 1.00029 0.999786 1.00029C1.26495 1.00029 1.51926 1.10561 1.70679 1.29308L4.99979 4.58608L8.29279 1.29308C8.38503 1.19757 8.49538 1.12139 8.61738 1.06898C8.73939 1.01657 8.87061 0.988985 9.00339 0.987831C9.13616 0.986677 9.26784 1.01198 9.39074 1.06226C9.51364 1.11254 9.62529 1.18679 9.71918 1.28069C9.81307 1.37458 9.88733 1.48623 9.93761 1.60913C9.98789 1.73202 10.0132 1.8637 10.012 1.99648C10.0109 2.12926 9.9833 2.26048 9.93089 2.38249C9.87848 2.50449 9.8023 2.61483 9.70679 2.70708L5.70679 6.70708C5.51926 6.89455 5.26495 6.99987 4.99979 6.99987C4.73462 6.99987 4.48031 6.89455 4.29279 6.70708L0.292787 2.70708C0.105316 2.51955 0 2.26525 0 2.00008C0 1.73492 0.105316 1.48061 0.292787 1.29308Z" fill="white" />
                    </svg>
                </div>
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                sx={{
                    width: anchorRef.current ? anchorRef.current.offsetWidth : '150px', 
                }}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper
                            sx={{
                                borderRadius: '0px !important', 
                                width: '100%', 
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
                            }}
                        >
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                    sx={{
                                        borderRadius: '0px', 
                                        fontSize: '16px',
                                        padding: '0px', 
                                    }}
                                >
                                    {menuItems.map((item, index) => (
                                        <MenuItem
                                            key={index}
                                            sx={{
                                                borderBottom: index < menuItems.length - 1 ? '1px solid rgba(0, 0, 0, 0.5)' : 'none',
                                                '&:hover': { backgroundColor: 'transparent' }
                                            }}
                                            onClick={() => handleMenuItemClick(item)}
                                        >
                                            {item.to ? (
                                                <a
                                                    to={item.to}
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: 'inherit',
                                                        width: '100%',
                                                        display: 'block',
                                                    }}
                                                >
                                                    {item.label}
                                                </a>
                                            ) : (
                                                item.label
                                            )}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Stack>
    );
}