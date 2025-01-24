const contentData = {
    'course': {
        title: '写作疗愈课程',
        content: `
            <h3>课程介绍</h3>
            <p>在这里，我们将一起探索写作疗愈的奥秘。课程包括：</p>
            <ul>
                <li>写作疗愈的基础理论</li>
                <li>情感抒发技巧</li>
                <li>自我对话方法</li>
                <li>叙事治疗实践</li>
            </ul>
        `
    },
    'story': {
        title: '个人故事',
        content: `
            <h3>我的写作历程</h3>
            <p>分享我是如何通过写作找到内心平静，以及在这个过程中的收获与感悟。</p>
        `
    },
    'practice': {
        title: '写作练习',
        content: `
            <h3>日常写作练习</h3>
            <p>这里提供一些实用的写作练习方法：</p>
            <ul>
                <li>晨间日记</li>
                <li>感恩日记</li>
                <li>情绪观察日记</li>
                <li>对话式写作</li>
            </ul>
        `
    },
    'workshop': {
        title: '写作工作坊',
        content: `
            <h3>小型写作工作坊</h3>
            <p>定期举办的写作工作坊活动：</p>
            <ul>
                <li>每月主题写作分享</li>
                <li>小组互动与讨论</li>
                <li>写作技巧交流</li>
                <li>作品赏析与反馈</li>
            </ul>
        `
    }
};

function showDetail(type) {
    const modal = document.getElementById('detail-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    
    modalTitle.textContent = contentData[type].title;
    modalContent.innerHTML = contentData[type].content;
    modal.style.display = 'block';
}

function closeDetail() {
    const modal = document.getElementById('detail-modal');
    modal.style.display = 'none';
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('detail-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}