import { useState, useEffect } from 'react';

const DEFAULT_DATA = {
    name: 'beca barreto',
    handle: '@becabarreto',
    bio: '🍓 Seja bem-vindo ao meu Privacy, aqui você vai encontrar minhas melhores fotos e vídeos exclusivos',
    stats: {
        posts: '53',
        media: '26',
        likes: '37.2k'
    },
    coverImage: '/cover.png',
    avatarImage: '/profile.png',
    postsCount: '53',
    mediaCount: '26',
    adminAccessCode: '1234',
    paymentLinks: {
        month1: 'https://app.syncpayments.com.br/payment-link/a12f4ba5-2f1f-4d4c-b41c-a07631718513',
        month3: 'https://go.tribopay.com.br/yb1e4',
        month6: 'https://go.tribopay.com.br/0ywzw'
    },
    posts: [
        { id: 1, type: 'image', locked: true },
        { id: 2, type: 'image', locked: true }
    ]
};

export const useSiteData = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [siteData, setSiteData] = useState(() => {
        const saved = localStorage.getItem('privacy_clone_data');
        if (saved) {
            const parsed = JSON.parse(saved);

            // Migration: If the user still has the old default avatar or cover, force the new ones
            const oldDefaultAvatar = 'https://randomuser.me/api/portraits/women/44.jpg';
            const oldDefaultCover = 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

            if (parsed.avatarImage === oldDefaultAvatar || parsed.avatarImage === '/src/assets/profile.png') {
                parsed.avatarImage = DEFAULT_DATA.avatarImage;
            }

            // Migration: Force new name, handle and payment link if they are still the old defaults
            const oldDefaultName = 'Sabrina De Martini';
            const oldDefaultHandle = '@sabrinademartini';

            if (parsed.name === oldDefaultName) parsed.name = DEFAULT_DATA.name;
            if (parsed.handle === oldDefaultHandle) parsed.handle = DEFAULT_DATA.handle;

            // Force the specific payment link if it's empty or matches the old TriboPay default
            const oldTriboPay = 'https://go.tribopay.com.br/nfaszx74qs';
            if (!parsed.paymentLinks.month1 || parsed.paymentLinks.month1 === '' || parsed.paymentLinks.month1 === oldTriboPay) {
                parsed.paymentLinks.month1 = DEFAULT_DATA.paymentLinks.month1;
                parsed.paymentLinks.month3 = DEFAULT_DATA.paymentLinks.month3;
                parsed.paymentLinks.month6 = DEFAULT_DATA.paymentLinks.month6;
            }

            // Migration: Force stats update if they match the old defaults
            if (parsed.stats.posts === '1K') parsed.stats.posts = DEFAULT_DATA.stats.posts;
            if (parsed.stats.media === '367') parsed.stats.media = DEFAULT_DATA.stats.media;
            if (parsed.stats.likes === '75.9K') parsed.stats.likes = DEFAULT_DATA.stats.likes;
            if (parsed.postsCount === '821') parsed.postsCount = DEFAULT_DATA.postsCount;
            if (parsed.mediaCount === '1.400') parsed.mediaCount = DEFAULT_DATA.mediaCount;

            // Merge with DEFAULT_DATA
            return { ...DEFAULT_DATA, ...parsed };
        }
        return DEFAULT_DATA;
    });

    useEffect(() => {
        localStorage.setItem('privacy_clone_data', JSON.stringify(siteData));
    }, [siteData]);

    const updateField = (field, value) => {
        setSiteData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const updateStats = (statField, value) => {
        setSiteData(prev => ({
            ...prev,
            stats: {
                ...prev.stats,
                [statField]: value
            }
        }));
    };

    const updatePaymentLink = (plan, url) => {
        setSiteData(prev => ({
            ...prev,
            paymentLinks: {
                ...prev.paymentLinks,
                [plan]: url
            }
        }));
    };

    const addPost = (post) => {
        setSiteData(prev => ({
            ...prev,
            posts: [post, ...prev.posts]
        }));
    };

    const deletePost = (id) => {
        setSiteData(prev => ({
            ...prev,
            posts: prev.posts.filter(p => p.id !== id)
        }));
    };

    const resetData = () => {
        setSiteData(DEFAULT_DATA);
    };

    const login = (code) => {
        if (code === siteData.adminAccessCode) {
            setIsAdmin(true);
            return true;
        }
        return false;
    };

    const logout = () => setIsAdmin(false);

    return { siteData, updateField, updateStats, updatePaymentLink, addPost, deletePost, resetData, isAdmin, login, logout };
};
