/**
 * 移动端优化 JavaScript - 前沿科技日报
 * 功能：夜间模式、字体大小调节、底部导航、下拉刷新
 */

(function() {
    'use strict';

    // ========== 配置 ==========
    const CONFIG = {
        themeKey: 'tech-daily-theme',
        fontSizeKey: 'tech-daily-font-size',
        defaultTheme: 'light',
        defaultFontSize: 'medium'
    };

    // ========== 主题管理 ==========
    const ThemeManager = {
        init() {
            const savedTheme = localStorage.getItem(CONFIG.themeKey) || CONFIG.defaultTheme;
            this.setTheme(savedTheme);
        },

        setTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem(CONFIG.themeKey, theme);
            
            // 更新开关状态
            const toggle = document.getElementById('theme-toggle');
            if (toggle) {
                toggle.checked = theme === 'dark';
            }
        },

        toggle() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            this.setTheme(newTheme);
        },

        getCurrentTheme() {
            return document.documentElement.getAttribute('data-theme') || CONFIG.defaultTheme;
        }
    };

    // ========== 字体大小管理 ==========
    const FontSizeManager = {
        init() {
            const savedSize = localStorage.getItem(CONFIG.fontSizeKey) || CONFIG.defaultFontSize;
            this.setFontSize(savedSize);
        },

        setFontSize(size) {
            document.documentElement.setAttribute('data-font-size', size);
            localStorage.setItem(CONFIG.fontSizeKey, size);
            
            // 更新按钮状态
            document.querySelectorAll('.font-size-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.size === size);
            });
        },

        getCurrentSize() {
            return document.documentElement.getAttribute('data-font-size') || CONFIG.defaultFontSize;
        }
    };

    // ========== 设置面板管理 ==========
    const SettingsPanel = {
        init() {
            this.panel = document.getElementById('settings-panel');
            this.bindEvents();
        },

        bindEvents() {
            // 打开设置
            const settingsBtn = document.getElementById('settings-btn');
            if (settingsBtn) {
                settingsBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.open();
                });
            }

            // 关闭设置
            const closeBtn = document.getElementById('settings-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.close());
            }

            // 点击遮罩关闭
            if (this.panel) {
                this.panel.addEventListener('click', (e) => {
                    if (e.target === this.panel) {
                        this.close();
                    }
                });
            }

            // 主题切换
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) {
                themeToggle.addEventListener('change', () => {
                    ThemeManager.toggle();
                });
            }

            // 字体大小切换
            document.querySelectorAll('.font-size-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    FontSizeManager.setFontSize(btn.dataset.size);
                });
            });
        },

        open() {
            if (this.panel) {
                this.panel.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        },

        close() {
            if (this.panel) {
                this.panel.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    };

    // ========== 下拉刷新 ==========
    const PullToRefresh = {
        init(callback) {
            this.callback = callback;
            this.container = document.querySelector('.pull-to-refresh');
            this.indicator = document.querySelector('.ptr-indicator');
            
            if (!this.container) return;
            
            this.startY = 0;
            this.currentY = 0;
            this.isPulling = false;
            this.isRefreshing = false;
            this.threshold = 80;
            
            this.bindEvents();
        },

        bindEvents() {
            // 触摸事件
            this.container.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
            this.container.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: true });
            this.container.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
            
            // 鼠标事件（桌面端测试用）
            this.container.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        },

        handleTouchStart(e) {
            if (this.isRefreshing) return;
            // 只在页面顶部触发
            if (window.scrollY > 10) return;
            
            this.startY = e.touches[0].clientY;
            this.isPulling = true;
        },

        handleTouchMove(e) {
            if (!this.isPulling || this.isRefreshing) return;
            
            this.currentY = e.touches[0].clientY;
            const diff = this.currentY - this.startY;
            
            if (diff > 0 && diff < 150) {
                this.container.style.transform = `translateY(${diff * 0.5}px)`;
                
                if (this.indicator) {
                    if (diff >= this.threshold) {
                        this.indicator.classList.remove('pulling');
                        this.indicator.classList.add('ready');
                    } else {
                        this.indicator.classList.add('pulling');
                        this.indicator.classList.remove('ready');
                    }
                }
            }
        },

        handleTouchEnd(e) {
            if (!this.isPulling || this.isRefreshing) return;
            
            const diff = this.currentY - this.startY;
            this.isPulling = false;
            
            if (diff >= this.threshold) {
                this.startRefresh();
            } else {
                this.reset();
            }
        },

        handleMouseDown(e) {
            if (window.scrollY > 10) return;
            this.startY = e.clientY;
            this.isPulling = true;
            
            const handleMouseMove = (e) => {
                if (!this.isPulling) return;
                this.currentY = e.clientY;
                const diff = this.currentY - this.startY;
                
                if (diff > 0 && diff < 150) {
                    this.container.style.transform = `translateY(${diff * 0.5}px)`;
                }
            };
            
            const handleMouseUp = (e) => {
                this.isPulling = false;
                const diff = this.currentY - this.startY;
                
                if (diff >= this.threshold) {
                    this.startRefresh();
                } else {
                    this.reset();
                }
                
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
            
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        },

        startRefresh() {
            this.isRefreshing = true;
            this.container.style.transform = 'translateY(60px)';
            
            if (this.indicator) {
                this.indicator.classList.remove('ready', 'pulling');
                this.indicator.classList.add('refreshing');
            }
            
            if (typeof this.callback === 'function') {
                this.callback().then(() => {
                    this.endRefresh();
                }).catch(() => {
                    this.endRefresh();
                });
            } else {
                // 默认刷新行为：页面刷新
                setTimeout(() => {
                    location.reload();
                }, 1000);
            }
        },

        endRefresh() {
            this.isRefreshing = false;
            this.reset();
            
            if (this.indicator) {
                this.indicator.classList.remove('refreshing');
                this.indicator.classList.add('pulling');
            }
        },

        reset() {
            this.container.style.transform = 'translateY(0)';
            this.container.style.transition = 'transform 0.3s';
            
            setTimeout(() => {
                this.container.style.transition = '';
            }, 300);
        }
    };

    // ========== 底部导航高亮 ==========
    const BottomNav = {
        init() {
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            
            document.querySelectorAll('.bottom-nav-item').forEach(item => {
                const href = item.getAttribute('href');
                if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    };

    // ========== Banner触摸滑动 ==========
    const BannerSwipe = {
        init() {
            this.container = document.querySelector('.banner-container');
            if (!this.container) return;
            
            this.slides = document.querySelectorAll('.banner-slide');
            this.dots = document.querySelectorAll('.banner-dot');
            this.currentSlide = 0;
            this.startX = 0;
            this.endX = 0;
            
            this.bindEvents();
            this.startAutoPlay();
        },

        bindEvents() {
            this.container.addEventListener('touchstart', (e) => {
                this.startX = e.touches[0].clientX;
                this.stopAutoPlay();
            }, { passive: true });
            
            this.container.addEventListener('touchend', (e) => {
                this.endX = e.changedTouches[0].clientX;
                this.handleSwipe();
                this.startAutoPlay();
            }, { passive: true });
        },

        handleSwipe() {
            const diff = this.startX - this.endX;
            const threshold = 50;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        },

        showSlide(index) {
            this.slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            this.dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            this.currentSlide = index;
        },

        nextSlide() {
            const next = (this.currentSlide + 1) % this.slides.length;
            this.showSlide(next);
        },

        prevSlide() {
            const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            this.showSlide(prev);
        },

        startAutoPlay() {
            this.stopAutoPlay();
            this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, 5000);
        },

        stopAutoPlay() {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
            }
        }
    };

    // ========== 初始化 ==========
    function init() {
        // 等待 DOM 加载完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', doInit);
        } else {
            doInit();
        }
    }

    function doInit() {
        // 初始化主题
        ThemeManager.init();
        
        // 初始化字体大小
        FontSizeManager.init();
        
        // 初始化设置面板
        SettingsPanel.init();
        
        // 初始化底部导航
        BottomNav.init();
        
        // 初始化 Banner 滑动
        BannerSwipe.init();
        
        // 初始化下拉刷新（可选）
        // PullToRefresh.init(() => {
        //     return new Promise((resolve) => {
        //         location.reload();
        //         resolve();
        //     });
        // });

        // 暴露全局接口
        window.TechDaily = {
            ThemeManager,
            FontSizeManager,
            SettingsPanel,
            PullToRefresh,
            BannerSwipe
        };
    }

    // 启动
    init();
})();
