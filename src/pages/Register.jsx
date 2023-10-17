import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


const Register = ()=>{
    return(
        <div>
            <Box sx={{ mb: 4 }}>
                <Link
                    color="text.primary"
                    href="/"
                    sx={{
                        alignItems: 'center',
                        display: 'inline-flex',
                    }}
                    underline="hover"
                >
                    <SvgIcon sx={{ mr: 1 }}>
                        Leftt
                    </SvgIcon>
                    <Typography variant="subtitle2">
                        Dashboard
                    </Typography>
                </Link>
            </Box>
            <Stack
                sx={{ mb: 4 }}
                spacing={1}
            >
                <Typography variant="h5">
                    Register
                </Typography>
                <Typography
                    color="text.secondary"
                    variant="body2"
                >
                    Already have an account?
                    &nbsp;
                    <Link
                        href="#"
                        underline="hover"
                        variant="subtitle2"
                    >
                        Log in
                    </Link>
                </Typography>
            </Stack>
            <form
                noValidate
                onSubmit={()=>{}}
            >
                <Stack spacing={3}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                    />
                    <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                    />
                </Stack>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        ml: -1,
                        mt: 1,
                    }}
                >
                    <Checkbox
                        name="policy"
                    />
                    <Typography
                        color="text.secondary"
                        variant="body2"
                    >
                        I have read the
                        {' '}
                        <Link
                            component="a"
                            href="#"
                        >
                            Terms and Conditions
                        </Link>
                    </Typography>
                </Box>

                <Button
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    type="submit"
                    variant="contained"
                >
                    Register
                </Button>
            </form>
        </div>
    )
}
export default Register