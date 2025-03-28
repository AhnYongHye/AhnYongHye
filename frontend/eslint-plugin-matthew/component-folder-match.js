const path = require('path');
const fs = require('fs');

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'components 폴더 안에는 컴포넌트 폴더와 해당 폴더명과 일치하는 tsx 파일이 있어야 한다.',
      recommended: true,
    },
    messages: {
      noMatch: `components 폴더 안에 "{{dirName}}" 폴더와 이에 해당하는 "{{expectedFileName}}" 파일이 있어야 합니다.`,
    },
  },
  create(context) {
    return {
      Program(node) {
        const filePath = context.filename; // 현재 파일의 경로
        const dirName = path.basename(path.dirname(filePath)); // 현재 파일이 속한 폴더 이름
        const parentDir = path.dirname(path.dirname(filePath)); // 상위 디렉터리

        // 부모 폴더가 "components"로 끝나면서 대문자로 시작하는 폴더는 컴포넌트 폴더로 간주
        if (parentDir.endsWith('components') && /^[A-Z]/.test(dirName)) {
          const expectedFileName = `${dirName}.tsx`;
          const expectedFilePath = path.join(parentDir, dirName, expectedFileName);

          if (!fs.existsSync(expectedFilePath)) {
            context.report({
              node,
              messageId: 'noMatch',
              data: {
                dirName,
                expectedFileName,
              },
            });
          }
        }
      },
    };
  },
};
