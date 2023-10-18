import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const initialValues = {
    email: '',
    password: '',
    submit: null,
};


const Page = () => {

    return (
        <div className="grid grid-cols-2">
                <div className=" bg-emerald-600 h-full" >aaaaaaaaaaaaaaaaaaa</div>
            <div className="w-full h-full">
                <Box sx={{ mb: 4 }}>
                    <Link
                        sx={{
                            alignItems: 'center',
                            display: 'inline-flex',
                        }}
                        underline="hover"
                    >
                        <SvgIcon sx={{ mr: 1 }}>
                            Left Icon
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
                        Log in
                    </Typography>
                    <Typography
                        color="text.secondary"
                        variant="body2"
                    >
                        Don&apos;t have an account?
                        &nbsp;
                        <Link
                            href="#"
                            underline="hover"
                            variant="subtitle2"
                        >
                            Register
                        </Link>
                    </Typography>
                </Stack>
                <form
                    noValidate
                    onSubmit={()=>{}}
                >
                    <Stack spacing={3}>
                        <TextField
                            autoFocus
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
                    <Button
                        fullWidth
                        sx={{ mt: 3 }}
                        size="large"
                        type="submit"
                        variant="contained"
                    >
                        Continue
                    </Button>
                    <Box sx={{ mt: 3 }}>
                        <Link
                            href="#"
                            underline="hover"
                            variant="subtitle2"
                        >
                            Forgot password?
                        </Link>
                    </Box>
                </form>
            </div>
        </div>
    );
};

export default Page;
