import { useState, useEffect } from 'react';

const DEFAULT_DATA = {
    name: 'Sabrina De Martini',
    handle: '@sabrinademartini',
    bio: '🍓 Seja bem-vindo ao meu Privacy, aqui você vai encontrar minhas melhores fotos e vídeos exclusivos',
    stats: {
        posts: '1K',
        media: '367',
        likes: '75.9K'
    },
    coverImage: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    avatarImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    postsCount: '821',
    mediaCount: '1.400',
    adminAccessCode: '1234',
    paymentLinks: {
        month1: '',
        month3: '',
        month6: ''
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
            // Merge with DEFAULT_DATA to ensure new fields like adminAccessCode exist
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
