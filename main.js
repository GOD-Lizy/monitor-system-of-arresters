document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    // 初始化激活状态
    function initializeActiveTab() {
        const hash = window.location.hash.slice(1) || 'login';
        activateTab(hash);
    }

    // 激活指定标签页
    function activateTab(tabId) {
        tabs.forEach(t => {
            if (t.dataset.tab === tabId) {
                t.classList.add('active');
            } else {
                t.classList.remove('active');
            }
        });

        contents.forEach(c => {
            if (c.id === tabId) {
                c.classList.add('active');
            } else {
                c.classList.remove('active');
            }
        });
    }

    // 标签点击事件
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = tab.dataset.tab;
            window.location.hash = tabId;
            activateTab(tabId);
        });
    });

    // 监听 hash 变化
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.slice(1);
        activateTab(hash);
    });

    // 初始化
    initializeActiveTab();
});
