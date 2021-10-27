# openJDK8이 설치된 기본 이미지를 사용 
# 백엔드를 빌드한 jar파일을 /app.jar로 복사 
# 자바 추가 옵션은 없으며, 최종적으로 "java -jar /app.jar" 명령을 실행 
FROM openjdk:11-jre-slim
ADD ./target/ssafy-0.0.1-SNAPSHOT.jar app.jar
ENV JAVA_OPTS="" 
ENTRYPOINT ["java", "-jar", "/app.jar"]
