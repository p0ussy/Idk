# 위상반전 실험실 — iPhone mic version

iPhone Safari에서 `getUserMedia()` 마이크 권한을 받을 수 있도록 HTTPS/GitHub Pages 배포를 전제로 정리한 버전입니다.

## GitHub Pages
1. 이 폴더의 파일을 GitHub repository 루트에 업로드합니다.
2. Repository → Settings → Pages → Deploy from a branch
3. `main` / `/(root)` 선택
4. 생성된 `https://<username>.github.io/<repo>/` 주소를 iPhone Safari에서 엽니다.
5. `마이크 시작`을 누르고 마이크 권한을 허용합니다.

주의: `file://`로 직접 열거나 일반 HTTP 주소에서는 iPhone Safari의 마이크 권한이 동작하지 않을 수 있습니다.
