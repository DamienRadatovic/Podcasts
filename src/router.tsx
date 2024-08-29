import { createBrowserRouter, redirect } from 'react-router-dom';
import Layout from '@/components/layout/Layout.tsx';
import Home from '@/pages/home/Home.tsx';
import Blog from '@/pages/blog/Blog.tsx';
import Podcasts from '@/pages/podcasts/Podcasts.tsx';
import Podcast from '@/pages/podcast/Podcast.tsx';
import About from '@/pages/about/About.tsx';
import Terms from '@/pages/terms/Terms.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                loader: async () => redirect('/home'),
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/terms',
                element: <Terms />,
            },
            {
                path: '/podcasts',
                element: <Podcasts />,
            },
            {
                path: '/podcasts/:id',
                element: <Podcast />,
            },
        ]
    },
]);
